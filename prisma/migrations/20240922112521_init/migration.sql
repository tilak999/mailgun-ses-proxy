-- CreateTable
CREATE TABLE "NewsletterBatch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siteId" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "NewslettersMessages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siteId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "NewslettersErrors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siteId" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "NewsletterNotifications" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "rawEvent" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "NewsletterNotifications_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "NewslettersMessages" ("messageId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "NewslettersMessages_messageId_key" ON "NewslettersMessages"("messageId");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterNotifications_notificationId_key" ON "NewsletterNotifications"("notificationId");
