-- CreateTable
CREATE TABLE "Newsletters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blogId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "opened" REAL NOT NULL,
    "sent" REAL NOT NULL,
    "submitted" REAL NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
