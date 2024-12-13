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
exports.SubjectController = void 0;
const subject_services_1 = require("../services/subject-services");
class SubjectController {
    static createMataKuliah(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield subject_services_1.SubjectService.createMatkul(request);
                res.status(200).json({
                    data: response
                });
            }
            catch (error) {
                //pass error to middleware apparenteyly whatever that means perhaps I can learn it
                next(error);
            }
        });
    }
    static getAllMataKuliah(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield subject_services_1.SubjectService.getAllMataKuliah();
                res.status(200).json({
                    data: response
                });
            }
            catch (error) {
                //pass error to middleware apparenteyly whatever that means perhaps I can learn it
                next(error);
            }
        });
    }
    static updateMatkul(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield subject_services_1.SubjectService.updateMataKuliah(request, Number(req.params.subjectId));
                res.status(201).json({
                    data: response
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static assignStudent() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.SubjectController = SubjectController;
