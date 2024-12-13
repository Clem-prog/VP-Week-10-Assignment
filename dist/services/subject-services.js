"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectService = void 0;
const database_1 = require("../application/database");
const response_error_1 = require("../errors/response-error");
const subject_model_1 = require("../models/subject-model");
const subject_validation_1 = require("../validations/subject-validation");
const validation_1 = require("../validations/validation");
class SubjectService {
    static createMatkul(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const matkulRequest = validation_1.Validation.validate(subject_validation_1.SubjectValidation.CREATE, req);
            const mataKuliah = yield database_1.prismaClient.mataKuliah.create({
                data: {
                    name: matkulRequest.name,
                    lecturer: matkulRequest.lecturer,
                    urlImage: matkulRequest.urlImage,
                    uniqueCode: ""
                }
            });
            const uniqueCodeConcat = `JRSN-1234001${mataKuliah.id}`;
            const finalMataKuliah = yield database_1.prismaClient.mataKuliah.update({
                where: {
                    id: mataKuliah.id
                },
                data: {
                    uniqueCode: uniqueCodeConcat
                }
            });
            return (0, subject_model_1.toSubjectResponse)(finalMataKuliah);
        });
    }
    static getAllMataKuliah() {
        return __awaiter(this, void 0, void 0, function* () {
            const allMataKuliah = yield database_1.prismaClient.mataKuliah.findMany();
            return allMataKuliah;
        });
    }
    static updateMataKuliah(req, matkulId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matkulRequest = validation_1.Validation.validate(subject_validation_1.SubjectValidation.CREATE, req);
            const subject = yield database_1.prismaClient.mataKuliah.findUnique({
                where: {
                    id: matkulId
                }
            });
            if (!subject) {
                throw new response_error_1.ResponseError(404, 'Mata kuliah tidak ditemukan');
            }
            yield database_1.prismaClient.mataKuliah.update({
                where: {
                    id: matkulId
                },
                data: {
                    name: matkulRequest.name,
                    urlImage: matkulRequest.urlImage,
                    lecturer: matkulRequest.lecturer
                }
            });
            return "data updated successfully!";
        });
    }
    static assignStudent() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.SubjectService = SubjectService;
