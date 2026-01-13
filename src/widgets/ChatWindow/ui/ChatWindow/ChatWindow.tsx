"use client";
import { useState } from "react";
import { SendMessage } from "@/features/SendMessage";
import { MessageList } from "@/entities/Message";
import type { ChatMessage } from "@/entities/Message";

export const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const onSend = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className={"w-full h-[500px] bg-secondary-background rounded-lg overflow-hidden flex flex-col"}>
      <div className={"flex-1 p-4 overflow-y-auto "}>
        {messages.length > 0 ? (
          <MessageList messages={messages} />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
            <div className="text-3xl">🤖</div>
            <p className="text-sm">Ask AI anything about this video</p>

            <div className="text-xs space-y-1">
              <p>• Summarize the video</p>
              <p>• Explain this moment</p>
              <p>• What is the main idea?</p>
            </div>
          </div>
        )}
      </div>
      <div className={"shrink-0"}>
        <SendMessage onSend={onSend} />
      </div>
    </div>
  );
};
