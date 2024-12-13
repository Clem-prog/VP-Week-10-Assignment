/*
  Warnings:

  - You are about to drop the `Mahasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Mahasiswa";

-- CreateTable
CREATE TABLE "mahasiswa" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "nim" VARCHAR(100) NOT NULL,
    "mataKuliah_Id" INTEGER NOT NULL,

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_nim_key" ON "mahasiswa"("nim");

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "mahasiswa_mataKuliah_Id_fkey" FOREIGN KEY ("mataKuliah_Id") REFERENCES "MataKuliah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
