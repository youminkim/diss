/*
  Warnings:

  - Made the column `respId` on table `Track` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Track" ALTER COLUMN "respId" SET NOT NULL;
