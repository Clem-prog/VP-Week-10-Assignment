"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectValidation = void 0;
const zod_1 = require("zod");
class SubjectValidation {
}
exports.SubjectValidation = SubjectValidation;
SubjectValidation.CREATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    uniqueCode: zod_1.z.string().min(1).max(100),
    lecturer: zod_1.z.string().min(1).max(100),
    urlImage: zod_1.z.string().url().max(255),
});
