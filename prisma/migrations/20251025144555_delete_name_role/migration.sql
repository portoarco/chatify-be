/*
  Warnings:

  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Users_name_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "name",
DROP COLUMN "role";

-- DropEnum
DROP TYPE "public"."USER_ROLE";
