-- CreateTable
CREATE TABLE `NewsletterBatch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siteId` VARCHAR(191) NOT NULL,
    `fromEmail` TEXT NOT NULL,
    `contents` TEXT NOT NULL,
    `batchId` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewslettersMessages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siteId` VARCHAR(191) NOT NULL,
    `messageId` VARCHAR(191) NOT NULL,
    `toEmail` TEXT NOT NULL,
    `contents` TEXT NOT NULL,
    `batchId` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `NewslettersMessages_messageId_key`(`messageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewslettersErrors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siteId` VARCHAR(191) NOT NULL,
    `toEmail` TEXT NOT NULL,
    `contents` TEXT NOT NULL,
    `batchId` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsletterNotifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `notificationId` VARCHAR(191) NOT NULL,
    `messageId` VARCHAR(191) NOT NULL,
    `rawEvent` TEXT NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `NewsletterNotifications_notificationId_key`(`notificationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NewsletterNotifications` ADD CONSTRAINT `NewsletterNotifications_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `NewslettersMessages`(`messageId`) ON DELETE RESTRICT ON UPDATE CASCADE;
