import Markdown from "react-markdown";
import { cn } from "@/shared/lib/utils";
import type { ChatMessage } from "../../model/types/types";

interface MessageProps {
  message: ChatMessage;
}

export const Message = (props: MessageProps) => {
  const { message } = props;
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-center")}>
      <div className={cn("p-2 break-all ", isUser ? "bg-secondary rounded-lg lg:max-w-[60%] max-w-[90%]" : "w-full")}>
        <Markdown>{message.content}</Markdown>
      </div>
    </div>
  );
};
