import express from "express"
import { UserController } from "../controllers/user-controller"
import { SubjectController } from "../controllers/subject-controller"

export const publicRouter = express.Router()

publicRouter.get("/api/mahasiswa", UserController.getAllMahasiswa)
publicRouter.post("/api/mahasiswa", UserController.register)
publicRouter.put("/api/mahasiswa/:userId", UserController.assignMahasiswa)
publicRouter.get("/api/matakuliah", SubjectController.getAllMataKuliah)
publicRouter.post("/api/matakuliah", SubjectController.createMataKuliah)
publicRouter.put("/api/matakuliah/:subjectId", SubjectController.updateMatkul)
publicRouter.delete("/api/matakuliah/:subjectId", SubjectController.deleteMatkul)
