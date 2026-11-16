import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AllAiProvidersFailedError, createAiChatCompletion, getAiProviders } from "./aiProvider";
import type { AiProviderConfig } from "./aiProvider";

const gemini: AiProviderConfig = { name: "gemini", baseUrl: "https://gemini.test", apiKey: "g", model: "gm" };
const groq: AiProviderConfig = { name: "groq", baseUrl: "https://groq.test", apiKey: "q", model: "qm" };

const okResponse = (content: string) =>
  new Response(JSON.stringify({ choices: [{ message: { content } }] }), { status: 200 });

describe("getAiProviders", () => {
  it("uses gemini,groq order by default and skips providers without a key", () => {
    expect(getAiProviders({ GROQ_API_KEY: "q" }).map((p) => p.name)).toEqual(["groq"]);
    expect(getAiProviders({ GEMINI_API_KEY: "g", GROQ_API_KEY: "q" }).map((p) => p.name)).toEqual(["gemini", "groq"]);
  });

  it("respects AI_PROVIDERS order, model overrides and ignores unknown names", () => {
    const providers = getAiProviders({
      AI_PROVIDERS: "groq, unknown ,gemini",
      GEMINI_API_KEY: "g",
      GROQ_API_KEY: "q",
      GROQ_MODEL: "custom-model",
    });

    expect(providers.map((p) => p.name)).toEqual(["groq", "gemini"]);
    expect(providers[0].model).toBe("custom-model");
    expect(providers[0].baseUrl).toBe("https://api.groq.com/openai/v1");
  });
});

describe("createAiChatCompletion", () => {
  const fetchMock = vi.fn();
  const messages = [{ role: "user" as const, content: "Hi" }];

  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    fetchMock.mockReset();
  });

  it("returns the first provider's answer", async () => {
    fetchMock.mockResolvedValueOnce(okResponse("Hello!"));

    const result = await createAiChatCompletion(messages, { providers: [gemini, groq] });

    expect(result).toMatchObject({ content: "Hello!", provider: "gemini", fallbackErrors: [] });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://gemini.test/chat/completions");
    expect(init.headers.Authorization).toBe("Bearer g");
    expect(JSON.parse(init.body)).toMatchObject({ model: "gm", messages });
  });

  it("falls back to the next provider on rate limit", async () => {
    fetchMock
      .mockResolvedValueOnce(new Response("quota exceeded", { status: 429 }))
      .mockResolvedValueOnce(okResponse("From groq"));

    const result = await createAiChatCompletion(messages, { providers: [gemini, groq] });

    expect(result.provider).toBe("groq");
    expect(result.content).toBe("From groq");
    expect(result.fallbackErrors[0].message).toContain("[gemini] 429");
  });

  it("falls back on network errors and empty completions", async () => {
    fetchMock
      .mockRejectedValueOnce(new Error("timeout"))
      .mockResolvedValueOnce(new Response(JSON.stringify({ choices: [] }), { status: 200 }));

    await expect(createAiChatCompletion(messages, { providers: [gemini, groq] })).rejects.toBeInstanceOf(
      AllAiProvidersFailedError,
    );
  });

  it("throws when no provider is configured", async () => {
    await expect(createAiChatCompletion(messages, { providers: [] })).rejects.toThrow(/No AI provider configured/);
  });
});
