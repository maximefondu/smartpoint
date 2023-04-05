/*
  Warnings:

  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Route_url_key";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- CreateTable
CREATE TABLE "RouteKey" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,
    "required" BOOLEAN NOT NULL,

    CONSTRAINT "RouteKey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RouteKey" ADD CONSTRAINT "RouteKey_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
