-- CreateEnum
CREATE TYPE "EnglishLevel" AS ENUM ('A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dailyGoal" INTEGER NOT NULL DEFAULT 0,
    "totalInput" INTEGER NOT NULL DEFAULT 0,
    "level" "EnglishLevel" NOT NULL DEFAULT 'A0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "level" "EnglishLevel" NOT NULL,
    "duration" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "transcript" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVideoProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "watchedSeconds" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserVideoProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDailyWatch" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "watchedSeconds" INTEGER NOT NULL DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDailyWatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserVideoProgress_userId_videoId_key" ON "UserVideoProgress"("userId", "videoId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDailyWatch_userId_date_key" ON "UserDailyWatch"("userId", "date");

-- AddForeignKey
ALTER TABLE "UserVideoProgress" ADD CONSTRAINT "UserVideoProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVideoProgress" ADD CONSTRAINT "UserVideoProgress_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDailyWatch" ADD CONSTRAINT "UserDailyWatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
