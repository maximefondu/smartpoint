-- AlterTable
ALTER TABLE "Route" ALTER COLUMN "name" SET DEFAULT '';

-- AlterTable
ALTER TABLE "RouteKey" ALTER COLUMN "key" SET DEFAULT '',
ALTER COLUMN "required" SET DEFAULT false;
