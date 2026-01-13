import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { ChatMessage } from "@/entities/Message";

const apiKey = process.env.AI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body: { messages: ChatMessage[] } = await req.json();
    const { messages } = body;

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

    const data = await response.json();
    return NextResponse.json(data.message as ChatMessage);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating manual watch-time time" }, { status: 500 });
  }
}
