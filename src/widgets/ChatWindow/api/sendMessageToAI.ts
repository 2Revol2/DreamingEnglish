import { api } from "@/shared/api/api";
import type { ChatMessage } from "@/entities/Message";

export const sendMessageToAI = async (messages: ChatMessage[], videoId?: string) => {
  return await api<ChatMessage>("/chat", {
    body: JSON.stringify({ messages, videoId }),
    method: "POST",
  });
};
