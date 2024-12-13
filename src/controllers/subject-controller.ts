import { NextFunction, Request, Response } from "express";
import { RegisterUserRequest, UserResponse } from "../models/user-model";
import { SubjectService } from "../services/subject-services";
import { AllSubjectResponse, MakeSubjectRequest, SubjectResponse } from "../models/subject-model";


export class SubjectController {
    static async createMataKuliah(req: Request, res: Response, next: NextFunction) {
        try {
            const request: MakeSubjectRequest = req.body as MakeSubjectRequest
            const response: SubjectResponse = await SubjectService.createMatkul(request)

            res.status(200).json({
                data: response
            })
        } catch (error) {
            //pass error to middleware apparenteyly whatever that means perhaps I can learn it
            next(error)
        }
    }

    static async getAllMataKuliah(req: Request, res: Response, next: NextFunction) {
        try {
            
            const response: AllSubjectResponse[] = await SubjectService.getAllMataKuliah()

            res.status(200).json({
                data: response
            })
        } catch (error) {
            //pass error to middleware apparenteyly whatever that means perhaps I can learn it
            next(error)
        }
    }

    static async updateMatkul (
        req: Request,
        res: Response,
        next: NextFunction
    ){
        try {
            const request: MakeSubjectRequest = req.body as MakeSubjectRequest
            const response = await SubjectService.updateMataKuliah(
                request,
                Number(req.params.subjectId)
            )

            res.status(201).json({
                data: response
            })
        } catch (error){
            next(error)
        }
    }

    static async deleteMatkul (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await SubjectService.deleteMataKuliah(
                Number(req.params.subjectId)
            )

            res.status(200).json({
                data: response
            })
        } catch (error){
            next(error)
        }
    }
}