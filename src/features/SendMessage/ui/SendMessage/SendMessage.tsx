"use client";
import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import type { ChatMessage } from "@/entities/Message";

interface SendMessageProps {
  onSend: (message: ChatMessage) => void;
  disabled?: boolean;
}

export const SendMessage = (props: SendMessageProps) => {
  const { onSend, disabled = false } = props;

  const [content, setContent] = useState("");

  const onSendHandle = () => {
    if (disabled || !content.trim()) return;

    onSend({ role: "user", content });
    setContent("");
  };

  return (
    <div className={"flex gap-2"}>
      <Input
        placeholder={"Type your question here…"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={disabled}
      />
      <Button onClick={onSendHandle} disabled={disabled}>
        Send
      </Button>
    </div>
  );
};
