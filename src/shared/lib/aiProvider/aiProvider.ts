/**
 * Thin client for OpenAI-compatible chat completion APIs with ordered fallback.
 *
 * Providers are tried in the order of `AI_PROVIDERS` (default: "gemini,groq").
 * A provider without an API key is skipped. If a provider fails (rate limit,
 * no credits, 5xx, timeout, network error...) the next one is tried.
 */

export interface AiChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ProviderPreset {
  baseUrl: string;
  defaultModel: string;
  apiKeyEnv: string;
  modelEnv: string;
}

export const AI_PROVIDER_PRESETS = {
  gemini: {
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
    defaultModel: "gemini-3.5-flash-lite",
    apiKeyEnv: "GEMINI_API_KEY",
    modelEnv: "GEMINI_MODEL",
  },
  groq: {
    baseUrl: "https://api.groq.com/openai/v1",
    defaultModel: "openai/gpt-oss-120b",
    apiKeyEnv: "GROQ_API_KEY",
    modelEnv: "GROQ_MODEL",
  },
  openrouter: {
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "openai/gpt-oss-120b:free",
    apiKeyEnv: "OPENROUTER_API_KEY",
    modelEnv: "OPENROUTER_MODEL",
  },
  cerebras: {
    baseUrl: "https://api.cerebras.ai/v1",
    defaultModel: "gpt-oss-120b",
    apiKeyEnv: "CEREBRAS_API_KEY",
    modelEnv: "CEREBRAS_MODEL",
  },
} satisfies Record<string, ProviderPreset>;

export type AiProviderName = keyof typeof AI_PROVIDER_PRESETS;

export interface AiProviderConfig {
  name: AiProviderName;
  baseUrl: string;
  apiKey: string;
  model: string;
}

const DEFAULT_PROVIDERS = "gemini,groq";
const DEFAULT_TIMEOUT_MS = 30_000;

const isProviderName = (name: string): name is AiProviderName => name in AI_PROVIDER_PRESETS;

export const getAiProviders = (env: Record<string, string | undefined> = process.env): AiProviderConfig[] =>
  (env.AI_PROVIDERS || DEFAULT_PROVIDERS)
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(isProviderName)
    .map((name) => {
      const preset = AI_PROVIDER_PRESETS[name];
      return {
        name,
        baseUrl: preset.baseUrl,
        apiKey: env[preset.apiKeyEnv] ?? "",
        model: env[preset.modelEnv] || preset.defaultModel,
      };
    })
    .filter((provider) => {
      if (!provider.apiKey && env.NODE_ENV !== "test") {
        console.warn(
          `[aiProvider] "${provider.name}" is listed in AI_PROVIDERS but ${AI_PROVIDER_PRESETS[provider.name].apiKeyEnv} is empty — skipping it`,
        );
      }
      return provider.apiKey;
    });

export class AiProviderError extends Error {
  provider: AiProviderName;
  status: number | null;

  constructor(provider: AiProviderName, status: number | null, message: string) {
    super(`[${provider}] ${status ?? "network"}: ${message}`);
    this.name = "AiProviderError";
    this.provider = provider;
    this.status = status;
  }
}

export class AllAiProvidersFailedError extends Error {
  errors: Error[];

  constructor(errors: Error[]) {
    super(
      errors.length
        ? `All AI providers failed: ${errors.map((e) => e.message).join(" | ")}`
        : "No AI provider configured (set GEMINI_API_KEY and/or GROQ_API_KEY)",
    );
    this.name = "AllAiProvidersFailedError";
    this.errors = errors;
  }
}

interface ChatCompletionResponse {
  choices?: Array<{ message?: { content?: string | null } }>;
}

const requestCompletion = async (
  provider: AiProviderConfig,
  messages: AiChatMessage[],
  timeoutMs: number,
): Promise<string> => {
  let response: Response;

  try {
    response = await fetch(`${provider.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${provider.apiKey}`,
      },
      body: JSON.stringify({ model: provider.model, messages, stream: false }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (error) {
    throw new AiProviderError(provider.name, null, error instanceof Error ? error.message : String(error));
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new AiProviderError(provider.name, response.status, text.slice(0, 500) || response.statusText);
  }

  const data = (await response.json()) as ChatCompletionResponse;
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new AiProviderError(provider.name, response.status, "Empty completion");
  }

  return content;
};

export interface AiChatResult {
  content: string;
  provider: AiProviderName;
  model: string;
  /** Errors from providers that were tried before the successful one. */
  fallbackErrors: Error[];
}

export const createAiChatCompletion = async (
  messages: AiChatMessage[],
  options: { providers?: AiProviderConfig[]; timeoutMs?: number } = {},
): Promise<AiChatResult> => {
  const providers = options.providers ?? getAiProviders();
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const errors: Error[] = [];

  for (const provider of providers) {
    try {
      const content = await requestCompletion(provider, messages, timeoutMs);
      return { content, provider: provider.name, model: provider.model, fallbackErrors: errors };
    } catch (error) {
      errors.push(error instanceof Error ? error : new Error(String(error)));
    }
  }

  throw new AllAiProvidersFailedError(errors);
};
