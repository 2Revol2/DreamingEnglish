import { apiWithHeaders } from "@/shared/api/api";
import type { ChatMessage } from "@/entities/Message";

export interface ChatQuotaInfo {
  limit: number;
  remaining: number;
  resetAt: string;
}

export interface ChatLimitErrorData {
  error: "daily_limit_reached" | "global_limit_reached";
  isGuest: boolean;
  limit: number;
  resetAt: string;
}

export const sendMessageToAI = async (messages: ChatMessage[], videoId?: string) => {
  const { data, headers } = await apiWithHeaders<ChatMessage>("/chat", {
    body: JSON.stringify({ messages, videoId }),
    method: "POST",
  });

  const limit = headers.get("X-RateLimit-Limit");
  const remaining = headers.get("X-RateLimit-Remaining");
  const resetAt = headers.get("X-RateLimit-Reset");

  const quota: ChatQuotaInfo | null =
    limit && remaining && resetAt ? { limit: Number(limit), remaining: Number(remaining), resetAt } : null;

  return { message: data, quota };
};
