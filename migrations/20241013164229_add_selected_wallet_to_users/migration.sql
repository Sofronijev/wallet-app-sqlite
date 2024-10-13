-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT DEFAULT '',
    "password" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selectedWalletId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Users_selectedWalletId_fkey" FOREIGN KEY ("selectedWalletId") REFERENCES "Wallet" ("walletId") ON DELETE SET DEFAULT ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("createdAt", "email", "id", "password", "selectedWalletId", "username") SELECT "createdAt", "email", "id", "password", "selectedWalletId", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
