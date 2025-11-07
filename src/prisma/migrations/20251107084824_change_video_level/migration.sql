/*
  Warnings:

  - Changed the type of `level` on the `Video` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VideoLevel" AS ENUM ('SUPER_BEGINNER', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "level",
ADD COLUMN     "level" "VideoLevel" NOT NULL;
