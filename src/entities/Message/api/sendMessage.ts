import type { ChatMessage } from "../model/types/types";

const apiKey = process.env.AI_API_KEY;

interface SendMessageProps {
  messages: ChatMessage[];
}

interface Response {
  messages: ChatMessage;
}

export const sendMessage = async (props: SendMessageProps) => {
  const { messages } = props;

  const response = await fetch("https://ollama.com/api/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "kimi-k2:1t",
      stream: false,
      messages,
    }),
  });

  return (await response.json()) as Response;
};
