import { NextFunction, Request, Response } from "express";
import { RegisterUserRequest, UserResponse, AllUserResponse, AssignUserRequest } from "../models/user-model";
import { UserService } from "../services/user-services";


export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: RegisterUserRequest = req.body as RegisterUserRequest
            const response: UserResponse = await UserService.register(request)

            res.status(200).json({
                data: response
            })
        } catch (error) {
            //pass error to middleware apparenteyly whatever that means perhaps I can learn it
            next(error)
        }
    }

    static async getAllMahasiswa(req: Request, res: Response, next: NextFunction) {
        try {
            
            const response: AllUserResponse[] = await UserService.getAllMahasiswa()

            res.status(200).json({
                data: response
            })
        } catch (error) {
            //pass error to middleware apparenteyly whatever that means perhaps I can learn it
            next(error)
        }
    }

    static async assignMahasiswa(req: Request, res: Response, next: NextFunction) {
        try {
            const request:  AssignUserRequest = req.body as AssignUserRequest
            const response = await UserService.assignMahasiswa(
                request,
                Number(req.params.userId)
            )

            res.status(201).json({
                data: response
            })
        } catch (error) {
            //pass error to middleware apparenteyly whatever that means perhaps I can learn it
            next(error)
        }
    }
}