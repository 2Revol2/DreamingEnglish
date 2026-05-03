import { NextResponse } from "next/server";
import { Ollama } from "ollama";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { basePromptForAI } from "@/shared/constants/basePromptForAI";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";
import type { ChatMessage } from "@/entities/Message";

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: { Authorization: "Bearer " + process.env.OLLAMA_API_KEY },
});

export async function POST(req: NextRequest) {
  try {
    const { error } = await withAuth();

    if (error) {
      return error;
    }

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

    const response = await ollama.chat({
      model: "gpt-oss:120b",
      messages: messagesWithVideoContext,
      stream: false,
    });

    console.log(response);

    return NextResponse.json(response.message as ChatMessage);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending the message" }, { status: 500 });
  }
}
