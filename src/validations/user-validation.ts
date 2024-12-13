import {z, ZodType } from "zod"

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        name: z.string().min(1).max(100)
    })
    
    static readonly ASSIGN: ZodType = z.object({
        mataKuliah_Id: z.number().min(1).max(100)
    })
}