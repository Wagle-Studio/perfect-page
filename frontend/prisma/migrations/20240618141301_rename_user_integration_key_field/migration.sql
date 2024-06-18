/*
  Warnings:

  - You are about to drop the column `api_key` on the `Settings` table. All the data in the column will be lost.
  - Added the required column `integration_key` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Settings` DROP COLUMN `api_key`,
    ADD COLUMN `integration_key` VARCHAR(191) NOT NULL;
