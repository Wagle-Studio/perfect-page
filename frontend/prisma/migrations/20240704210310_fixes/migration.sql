/*
  Warnings:

  - You are about to drop the column `page_id` on the `Pages` table. All the data in the column will be lost.
  - You are about to drop the column `integration_key` on the `Settings` table. All the data in the column will be lost.
  - Added the required column `notionPageId` to the `Pages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `integrationKey` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pages` DROP COLUMN `page_id`,
    ADD COLUMN `notionPageId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Settings` DROP COLUMN `integration_key`,
    ADD COLUMN `integrationKey` VARCHAR(191) NOT NULL;
