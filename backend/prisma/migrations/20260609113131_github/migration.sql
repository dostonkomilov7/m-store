/*
  Warnings:

  - You are about to drop the column `apple_id` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "apple_id",
ADD COLUMN     "github_id" VARCHAR;
