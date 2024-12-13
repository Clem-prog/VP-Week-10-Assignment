import { Mahasiswa } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../errors/response-error";
import { AssignUserRequest, RegisterUserRequest, toUserResponse, UserResponse } from "../models/user-model";
import { UserValidation } from "../validations/user-validation";
import { Validation } from "../validations/validation";

export class UserService {
    static async register(req: RegisterUserRequest): Promise<UserResponse> {
        const registerReq = Validation.validate(
            UserValidation.REGISTER,
            req
        )

        const user = await prismaClient.mahasiswa.create({
            data: { //cannot continue because we haven't gotten to that part
                name: registerReq.name,
                nim: "",
            }
        })

        const nimConcat = `1234100${user.id}`
        const finalUser = await prismaClient.mahasiswa.update({
            where: { 
                id: user.id 
            },
            data: { 
                nim: nimConcat
            }
        })

        return toUserResponse(finalUser)
    }

    static async getAllMahasiswa(): Promise<Mahasiswa[]> {
        const allMahasiswa = await prismaClient.mahasiswa.findMany({
            orderBy: {
                id: 'asc'
            }
        })

        return allMahasiswa
    }

    static async assignMahasiswa(
        req: AssignUserRequest,
        userId: number
    ): Promise<String> {
        const assignRequest = Validation.validate(
            UserValidation.ASSIGN,
            req
        )

        const user = await prismaClient.mahasiswa.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            throw new ResponseError(404, 'Mahasiswa tidak ditemukan')
        }

        if (assignRequest.mataKuliah_Id === null) {
            throw new ResponseError(400, 'Mata kuliah tidak boleh kosong')
        }

        const subject = await prismaClient.mataKuliah.findUnique({
            where: {
                id: assignRequest.mataKuliah_Id
            }
        })

        if (!subject) {
            throw new ResponseError(404, 'Mata kuliah tidak ditemukan.')
        }

        await prismaClient.mahasiswa.update({
            where: {
                id: userId
            },
            data: {
                mataKuliah_Id: assignRequest.mataKuliah_Id
            }
        })

        return "Student assigned successfully!"
    }
}