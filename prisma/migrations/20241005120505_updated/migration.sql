-- AlterTable
ALTER TABLE `NewsletterBatch` MODIFY `fromEmail` TEXT NOT NULL,
    MODIFY `contents` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `NewsletterNotifications` MODIFY `rawEvent` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `NewslettersErrors` MODIFY `toEmail` TEXT NOT NULL,
    MODIFY `contents` TEXT NOT NULL,
    MODIFY `message` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `NewslettersMessages` MODIFY `toEmail` TEXT NOT NULL,
    MODIFY `contents` TEXT NOT NULL;
