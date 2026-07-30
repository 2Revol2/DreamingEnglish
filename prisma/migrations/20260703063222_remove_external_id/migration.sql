/*
  Warnings:

  - You are about to drop the column `externalVideoId` on the `UserVideoHistory` table. All the data in the column will be lost.
  - You are about to drop the column `externalVideoId` on the `UserVideoProgress` table. All the data in the column will be lost.
  - You are about to drop the column `externalVideoId` on the `UserWatchLater` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserVideoHistory" DROP COLUMN "externalVideoId";

-- AlterTable
ALTER TABLE "UserVideoProgress" DROP COLUMN "externalVideoId";

-- AlterTable
ALTER TABLE "UserWatchLater" DROP COLUMN "externalVideoId";
