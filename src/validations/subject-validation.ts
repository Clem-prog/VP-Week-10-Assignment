import {z, ZodType } from "zod"

export class SubjectValidation {
    static readonly CREATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        uniqueCode: z.string().min(1).max(100).optional(),
        lecturer: z.string().min(1).max(100),
        urlImage: z.string().min(1).max(255),
    });

    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(1).max(100).optional(),
        lecturer: z.string().min(1).max(100).optional(),
        urlImage: z.string().min(1).max(255).optional(),
    });
}