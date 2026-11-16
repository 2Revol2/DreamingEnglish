-- CreateTable
CREATE TABLE "AiChatDailyUsage" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "messagesSent" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "AiChatDailyUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AiChatDailyUsage_identifier_date_key" ON "AiChatDailyUsage"("identifier", "date");
