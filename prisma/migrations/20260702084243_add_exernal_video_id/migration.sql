-- AlterTable
ALTER TABLE "UserVideoHistory" ADD COLUMN     "externalVideoId" TEXT;

-- AlterTable
ALTER TABLE "UserVideoProgress" ADD COLUMN     "externalVideoId" TEXT;

-- AlterTable
ALTER TABLE "UserWatchLater" ADD COLUMN     "externalVideoId" TEXT;
