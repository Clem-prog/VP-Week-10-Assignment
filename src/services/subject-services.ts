import { MataKuliah } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../errors/response-error";
import { MakeSubjectRequest, toSubjectResponse, SubjectResponse } from "../models/subject-model";
import { SubjectValidation } from "../validations/subject-validation";
import { Validation } from "../validations/validation";

export class SubjectService {
    static async createMatkul(req: MakeSubjectRequest): Promise<SubjectResponse> {
        const matkulRequest = Validation.validate(
            SubjectValidation.CREATE,
            req
        )

        const mataKuliah = await prismaClient.mataKuliah.create({
            data: {
                name: matkulRequest.name,
                lecturer: matkulRequest.lecturer,
                urlImage: matkulRequest.urlImage,
                uniqueCode: ""
            }
        })

        const uniqueCodeConcat = `JRSN-1234001${mataKuliah.id}`;
        const finalMataKuliah = await prismaClient.mataKuliah.update({
            where: { 
                id: mataKuliah.id 
            },
            data: { 
                uniqueCode: uniqueCodeConcat
            }
        });

        return toSubjectResponse(finalMataKuliah)
    }

    static async getAllMataKuliah(): Promise<MataKuliah[]> {
        const allMataKuliah = await prismaClient.mataKuliah.findMany({
            orderBy: {
                id: 'asc'
            },
            include: {
                mahasiswa: true
            }
        })
        
        return allMataKuliah
    }

    static async updateMataKuliah(
        req: MakeSubjectRequest,
        matkulId: number,
    ): Promise<String> {
        const matkulRequest = Validation.validate(
            SubjectValidation.UPDATE,
            req
        )

        const subject = await prismaClient.mataKuliah.findUnique({
            where: {
                id: matkulId
            }
        })

        if (!subject) {
            throw new ResponseError(404, 'Mata kuliah tidak ditemukan')
        }

        await prismaClient.mataKuliah.update({
            where: {
                id: matkulId
            },
            data: {
                name: matkulRequest.name,
                urlImage: matkulRequest.urlImage,
                lecturer: matkulRequest.lecturer
            }
        })

        return "data updated successfully!"
    }

    static async deleteMataKuliah(
        matkulId: number,
    ): Promise<String> {
        const subject = await prismaClient.mataKuliah.findUnique({
            where: {
                id: matkulId
            }
        })

        if (!subject) {
            throw new ResponseError(404, 'Mata kuliah tidak ditemukan')
        }

        await prismaClient.mataKuliah.delete({
            where: {
                id: matkulId
            }
        })

        return "data deleted successfully!"
    }
}