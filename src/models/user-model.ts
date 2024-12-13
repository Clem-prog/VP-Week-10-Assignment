import { Mahasiswa } from "@prisma/client"

export interface RegisterUserRequest {
    name: string
}

export interface AssignUserRequest {
    mataKuliah_Id: number | null
}

export interface UserResponse {
    name: string
    nim: string
}

export interface AllUserResponse {
    id: number
    name: string
    nim: string
    mataKuliah_Id: number | null
}

export function toUserResponse(user: Mahasiswa): UserResponse {
    return {
        name: user.name,
        nim: user.nim
    }
}