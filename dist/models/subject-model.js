"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSubjectResponse = toSubjectResponse;
function toSubjectResponse(sub) {
    return {
        name: sub.name,
        uniqueCode: sub.uniqueCode,
        lecturer: sub.lecturer
    };
}
