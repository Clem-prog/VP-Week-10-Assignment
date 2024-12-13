-- CreateTable
CREATE TABLE "MataKuliah" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "uniqueCode" VARCHAR(50) NOT NULL,
    "lecturer" VARCHAR(100) NOT NULL,
    "urlImage" VARCHAR(255) NOT NULL,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "nim" VARCHAR(50) NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MataKuliah_uniqueCode_key" ON "MataKuliah"("uniqueCode");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_nim_key" ON "Mahasiswa"("nim");
