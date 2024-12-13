-- DropForeignKey
ALTER TABLE "mahasiswa" DROP CONSTRAINT "mahasiswa_mataKuliah_Id_fkey";

-- AlterTable
ALTER TABLE "mahasiswa" ALTER COLUMN "mataKuliah_Id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "mahasiswa_mataKuliah_Id_fkey" FOREIGN KEY ("mataKuliah_Id") REFERENCES "MataKuliah"("id") ON DELETE SET NULL ON UPDATE CASCADE;
