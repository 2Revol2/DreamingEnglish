"use client";
import { useState } from "react";
import { SendMessage } from "@/features/SendMessage";
import { MessageList } from "@/entities/Message";
import { Button } from "@/shared/ui/button";
import { sendMessageToAI } from "../../api/sendMessageToAI";
import type { ChatMessage } from "@/entities/Message";

interface ChatWindowProps {
  videoId: string;
}

export const ChatWindow = (props: ChatWindowProps) => {
  const { videoId } = props;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const onSend = async (message: ChatMessage) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    setLoading(true);
    try {
      const aiRespond = await sendMessageToAI(updatedMessages, videoId);
      setMessages([...updatedMessages, aiRespond]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const sendExample = async (text: string) => {
    await onSend({
      role: "user",
      content: text,
    });
  };

  return (
    <div className={"w-full h-[500px] bg-secondary-background rounded-lg overflow-hidden flex flex-col"}>
      {!messages.length && (
        <div className="p-4 border-b border-border flex flex-col gap-2">
          <h3 className="text-lg font-bold">Interact with the video using AI</h3>
          <p className="text-sm text-muted-foreground">Ask anything: summarize, explain or check your comprehension</p>
          <div className="flex gap-2 mt-2 lg:flex-row flex-col">
            {["Summarize", "Explain", "Main idea?", "Check my comprehension"].map((text) => (
              <Button variant={"secondary"} onClick={() => sendExample(text)} key={text}>
                {text}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className={"flex-1 p-4 overflow-y-auto "}>
        {messages.length > 0 ? (
          <>
            <MessageList messages={messages} />
            {loading && <div className="text-sm text-muted-foreground mt-2">AI is typing...</div>}
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
            <div className="text-3xl">🤖</div>
            <p className="text-sm">Ask AI anything about this video</p>
          </div>
        )}
      </div>
      <div className={"shrink-0"}>
        <SendMessage onSend={onSend} />
      </div>
    </div>
  );
};
