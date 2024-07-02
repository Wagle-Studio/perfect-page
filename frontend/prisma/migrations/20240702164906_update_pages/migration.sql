/*
  Warnings:

  - You are about to drop the column `userId` on the `Pages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pages` DROP FOREIGN KEY `Pages_userId_fkey`;

-- AlterTable
ALTER TABLE `Pages` DROP COLUMN `userId`;

-- CreateTable
CREATE TABLE `UserPages` (
    `userId` VARCHAR(191) NOT NULL,
    `pageId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `pageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserPages` ADD CONSTRAINT `UserPages_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPages` ADD CONSTRAINT `UserPages_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Pages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
