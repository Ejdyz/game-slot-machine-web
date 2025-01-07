-- CreateTable
CREATE TABLE "Game" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_key_key" ON "Game"("key");
