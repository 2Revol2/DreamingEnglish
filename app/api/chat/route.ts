import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { basePromptForAI } from "@/shared/constants/basePromptForAI";
import { getAuth } from "@/shared/auth/getAuth";
import { consumeAiChatQuota, getClientIp, refundAiChatQuota } from "@/shared/lib/aiChatQuota";
import { AllAiProvidersFailedError, createAiChatCompletion } from "@/shared/lib/aiProvider";
import type { AiChatMessage } from "@/shared/lib/aiProvider";
import type { AiChatRequester } from "@/shared/lib/aiChatQuota";
import type { NextRequest } from "next/server";
import type { ChatMessage } from "@/entities/Message";

const rateLimitHeaders = (limit: number, remaining: number, resetAt: Date) => ({
  "X-RateLimit-Limit": String(limit),
  "X-RateLimit-Remaining": String(remaining),
  "X-RateLimit-Reset": resetAt.toISOString(),
});

export async function POST(req: NextRequest) {
  let reservedIdentifier: string | null = null;

  try {
    const { userId } = await getAuth();
    const requester: AiChatRequester = userId
      ? { type: "user", userId }
      : { type: "guest", ip: getClientIp(req.headers) };

    const quota = await consumeAiChatQuota(requester);

    if (!quota.allowed) {
      return NextResponse.json(
        {
          error: quota.reason === "global" ? "global_limit_reached" : "daily_limit_reached",
          isGuest: requester.type === "guest",
          limit: quota.limit,
          resetAt: quota.resetAt.toISOString(),
        },
        { status: 429, headers: rateLimitHeaders(quota.limit, 0, quota.resetAt) },
      );
    }

    reservedIdentifier = quota.identifier;

    const body: { messages: ChatMessage[]; videoId: string } = await req.json();
    const { messages, videoId } = body;

    const [transcript, video] = await Promise.all([
      prisma.videoTranscript.findFirst({ where: { videoId } }),
      prisma.video.findUnique({ where: { id: videoId } }),
    ]);

    const systemPrompt = transcript
      ? `${basePromptForAI}\n\nVIDEO LEVEL ${video ? video.level : ""} VIDEO TRANSCRIPT ${transcript.content}`
      : basePromptForAI;

    // Only user/assistant turns from the client — a client-sent "system" message must not override the prompt.
    const history: AiChatMessage[] = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: String(m.content) }));

    const completion = await createAiChatCompletion([{ role: "system", content: systemPrompt }, ...history]);

    if (completion.fallbackErrors.length) {
      Sentry.captureMessage(`AI chat fell back to ${completion.provider}`, {
        level: "warning",
        extra: { errors: completion.fallbackErrors.map((e) => e.message) },
      });
    }

    const message: ChatMessage = { role: "assistant", content: completion.content };

    return NextResponse.json(message, {
      headers: rateLimitHeaders(quota.limit, quota.remaining, quota.resetAt),
    });
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);

    if (reservedIdentifier) {
      await refundAiChatQuota(reservedIdentifier).catch(console.error);
    }

    if (error instanceof AllAiProvidersFailedError) {
      return NextResponse.json({ error: "ai_unavailable" }, { status: 503 });
    }

    return NextResponse.json({ error: "Error sending the message" }, { status: 500 });
  }
}
