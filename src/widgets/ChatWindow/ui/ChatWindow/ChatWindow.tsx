"use client";
import { useState, useTransition } from "react";
import { SendMessage } from "@/features/SendMessage";
import { MessageList } from "@/entities/Message";
import { Button } from "@/shared/ui/button";
import { ApiError } from "@/shared/api/api";
import { sendMessageToAI } from "../../api/sendMessageToAI";
import type { ChatLimitErrorData, ChatQuotaInfo } from "../../api/sendMessageToAI";
import type { ChatMessage } from "@/entities/Message";

interface ChatWindowProps {
  videoId: string;
}

const formatResetTime = (resetAt: string) =>
  new Date(resetAt).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

const getLimitMessage = (data: ChatLimitErrorData) => {
  const resetTime = formatResetTime(data.resetAt);

  if (data.error === "global_limit_reached") {
    return `The AI assistant is very busy today. Please try again after ${resetTime}.`;
  }

  if (data.isGuest) {
    return `You've used all ${data.limit} free messages for today. Sign in to get more, or come back after ${resetTime}.`;
  }

  return `You've reached your daily limit of ${data.limit} messages. It resets at ${resetTime}.`;
};

export const ChatWindow = (props: ChatWindowProps) => {
  const { videoId } = props;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quota, setQuota] = useState<ChatQuotaInfo | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const isBlocked = Boolean(limitMessage);

  const onSend = (message: ChatMessage) => {
    if (isPending || isBlocked) return;

    const currentMessages = [...messages, message];
    setMessages(currentMessages);
    setError(null);

    startTransition(async () => {
      try {
        const { message: aiRespond, quota: newQuota } = await sendMessageToAI(currentMessages, videoId);
        setMessages((prev) => [...prev, aiRespond]);
        if (newQuota) setQuota(newQuota);
      } catch (e) {
        if (e instanceof ApiError && e.status === 429 && e.data) {
          // The message was not processed — drop it so the history stays consistent.
          setMessages((prev) => prev.slice(0, -1));
          setLimitMessage(getLimitMessage(e.data as ChatLimitErrorData));
          return;
        }

        if (e instanceof ApiError && e.status === 503) {
          setError("The AI assistant is temporarily unavailable. Please try again a bit later.");
          return;
        }

        setError("Something went wrong. Please try again.");
      }
    });
  };

  const sendExample = (text: string) => {
    onSend({
      role: "user",
      content: text,
    });
  };

  return (
    <div className={"w-full h-[500px] bg-secondary-background rounded-lg overflow-hidden flex flex-col"}>
      {!messages.length ? (
        <div className="p-4 border-b border-border flex flex-col gap-2">
          <h3 className="text-lg font-bold">Interact with the video using AI</h3>
          <p className="text-sm text-muted-foreground">Ask anything: summarize, explain or check your comprehension</p>
          <div className="flex gap-2 mt-2 lg:flex-row flex-col">
            {["Summarize", "Explain", "Main idea?", "Check my comprehension"].map((text) => (
              <Button
                variant={"secondary"}
                onClick={() => sendExample(text)}
                key={text}
                disabled={isPending || isBlocked}
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      <div className={"flex-1 p-4 overflow-y-auto "}>
        {messages.length > 0 ? (
          <>
            <MessageList messages={messages} />
            {isPending ? <div className="text-sm text-muted-foreground mt-2">AI is typing...</div> : null}
            {error ? <div className="text-sm text-destructive mt-2">{error}</div> : null}
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
            <div className="text-3xl">🤖</div>
            <p className="text-sm">Ask AI anything about this video</p>
          </div>
        )}
      </div>
      <div className={"shrink-0"}>
        {limitMessage ? (
          <div className="px-4 py-2 text-sm text-muted-foreground border-t border-border">{limitMessage}</div>
        ) : quota ? (
          <div className="px-4 py-1 text-xs text-muted-foreground">
            {quota.remaining} of {quota.limit} messages left today
          </div>
        ) : null}
        <SendMessage onSend={onSend} disabled={isPending || isBlocked} />
      </div>
    </div>
  );
};
