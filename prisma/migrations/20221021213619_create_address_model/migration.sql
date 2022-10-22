/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `zip_code` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `Address_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_cpf_key` ON `User`(`cpf`);

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
