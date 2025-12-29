/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "name" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
