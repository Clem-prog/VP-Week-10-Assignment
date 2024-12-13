/*
  Warnings:

  - Made the column `nim` on table `mahasiswa` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "mahasiswa" ALTER COLUMN "nim" SET NOT NULL;
