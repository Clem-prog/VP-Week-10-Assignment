"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const subject_controller_1 = require("../controllers/subject-controller");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.get("/api/mahasiswa", user_controller_1.UserController.getAllMahasiswa);
exports.publicRouter.post("/api/mahasiswa", user_controller_1.UserController.register);
exports.publicRouter.get("/api/matakuliah", subject_controller_1.SubjectController.getAllMataKuliah);
exports.publicRouter.post("/api/matakuliah", subject_controller_1.SubjectController.createMataKuliah);
exports.publicRouter.put("/api/matakuliah/:subjectId", subject_controller_1.SubjectController.updateMatkul);
