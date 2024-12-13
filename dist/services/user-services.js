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
exports.UserService = void 0;
const database_1 = require("../application/database");
const user_model_1 = require("../models/user-model");
const user_validation_1 = require("../validations/user-validation");
const validation_1 = require("../validations/validation");
class UserService {
    static register(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const registerReq = validation_1.Validation.validate(user_validation_1.UserValidation.REGISTER, req);
            const user = yield database_1.prismaClient.mahasiswa.create({
                data: {
                    name: registerReq.name,
                    nim: "",
                }
            });
            const nimConcat = `1234100${user.id}`;
            const finalUser = yield database_1.prismaClient.mahasiswa.update({
                where: {
                    id: user.id
                },
                data: {
                    nim: nimConcat
                }
            });
            return (0, user_model_1.toUserResponse)(finalUser);
        });
    }
    static getAllMahasiswa() {
        return __awaiter(this, void 0, void 0, function* () {
            const allMahasiswa = yield database_1.prismaClient.mahasiswa.findMany();
            return allMahasiswa;
        });
    }
    static updateMahasiswa() {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: MAKE UPDATE MAHAISWAISWA
        });
    }
}
exports.UserService = UserService;
