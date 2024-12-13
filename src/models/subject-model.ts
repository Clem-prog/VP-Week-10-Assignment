import { MataKuliah } from "@prisma/client"

export interface MakeSubjectRequest {
    name: string
    lecturer: string
    urlImage: string
}

export interface SubjectResponse {
    name: string
    uniqueCode: string
    lecturer: string
}

export interface AllSubjectResponse {
    id: number
    name: string
    uniqueCode: string
    lecturer: string
    urlImage: string
}

export function toSubjectResponse(sub: MataKuliah): SubjectResponse {
    return {
        name: sub.name,
        uniqueCode: sub.uniqueCode,
        lecturer: sub.lecturer
    }
}