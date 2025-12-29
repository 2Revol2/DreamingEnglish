/*
  Warnings:

  - You are about to drop the column `transcript` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "transcript";

-- CreateTable
CREATE TABLE "VideoTranscript" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "VideoTranscript_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoTranscript_videoId_key" ON "VideoTranscript"("videoId");

-- AddForeignKey
ALTER TABLE "VideoTranscript" ADD CONSTRAINT "VideoTranscript_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
