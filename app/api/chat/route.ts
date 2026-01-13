import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { basePromptForAI } from "@/shared/constants/basePromptForAI";
import type { NextRequest } from "next/server";
import type { ChatMessage } from "@/entities/Message";

const apiKey = process.env.AI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body: { messages: ChatMessage[]; videoId: string } = await req.json();
    const { messages, videoId } = body;

    const [transcript, video] = await Promise.all([
      prisma.videoTranscript.findFirst({ where: { videoId } }),
      prisma.video.findUnique({ where: { id: videoId } }),
    ]);

    const messagesWithVideoContext = [{ role: "system", content: basePromptForAI }];

    if (transcript) {
      messagesWithVideoContext.push(
        { role: "system", content: `VIDEO LEVEL ${video ? video.level : ""} VIDEO TRANSCRIPT ${transcript.content}` },
        ...messages,
      );
    } else {
      messagesWithVideoContext.push(...messages);
    }

    const response = await fetch("https://ollama.com/api/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "kimi-k2:1t",
        stream: false,
        messages: messagesWithVideoContext,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data.message as ChatMessage);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending the message" }, { status: 500 });
  }
}
