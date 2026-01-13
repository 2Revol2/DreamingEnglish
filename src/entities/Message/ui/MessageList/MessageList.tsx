import { Message } from "../Message/Message";
import type { ChatMessage } from "../../model/types/types";

interface MessageListProps {
  messages: ChatMessage[];
}

export const MessageList = (props: MessageListProps) => {
  const { messages } = props;

  return (
    <div className={"flex flex-col gap-2"}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
};
