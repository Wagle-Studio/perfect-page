/*
  Warnings:

  - You are about to drop the `UserPages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Pages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserPages` DROP FOREIGN KEY `UserPages_pageId_fkey`;

-- DropForeignKey
ALTER TABLE `UserPages` DROP FOREIGN KEY `UserPages_userId_fkey`;

-- AlterTable
ALTER TABLE `Pages` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `UserPages`;

-- CreateIndex
CREATE INDEX `Pages_userId_idx` ON `Pages`(`userId`);

-- AddForeignKey
ALTER TABLE `Pages` ADD CONSTRAINT `Pages_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
