-- CreateTable
CREATE TABLE `NewsletterBatch` (
    `id` VARCHAR(191) NOT NULL,
    `siteId` VARCHAR(191) NOT NULL,
    `fromEmail` TEXT NOT NULL,
    `contents` LONGTEXT NOT NULL,
    `batchId` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsletterMessages` (
    `id` VARCHAR(191) NOT NULL,
    `messageId` VARCHAR(191) NOT NULL,
    `toEmail` TEXT NOT NULL,
    `newsletterBatchId` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `formatedContents` LONGTEXT NOT NULL,

    UNIQUE INDEX `NewsletterMessages_messageId_key`(`messageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsletterErrors` (
    `id` VARCHAR(191) NOT NULL,
    `toEmail` TEXT NOT NULL,
    `error` TEXT NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `newsletterBatchId` VARCHAR(191) NOT NULL,
    `messageId` VARCHAR(191) NOT NULL,
    `formatedContents` LONGTEXT NOT NULL,

    UNIQUE INDEX `NewsletterErrors_messageId_key`(`messageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NewsletterNotifications` (
    `id` VARCHAR(191) NOT NULL,
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
ALTER TABLE `NewsletterMessages` ADD CONSTRAINT `NewsletterMessages_newsletterBatchId_fkey` FOREIGN KEY (`newsletterBatchId`) REFERENCES `NewsletterBatch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NewsletterErrors` ADD CONSTRAINT `NewsletterErrors_newsletterBatchId_fkey` FOREIGN KEY (`newsletterBatchId`) REFERENCES `NewsletterBatch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NewsletterNotifications` ADD CONSTRAINT `NewsletterNotifications_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `NewsletterMessages`(`messageId`) ON DELETE RESTRICT ON UPDATE CASCADE;
