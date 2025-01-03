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
exports.UserController = void 0;
const user_services_1 = require("../services/user-services");
class UserController {
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield user_services_1.UserService.register(request);
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
    static getAllMahasiswa(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield user_services_1.UserService.getAllMahasiswa();
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
}
exports.UserController = UserController;
