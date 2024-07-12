import { Request, Response, NextFunction } from "express";

async function user_Form_Validator( error:any ,req:Request, res:Response, next:NextFunction ) {
    if(error.errors) {
        return res.status(499).json({"Message": "Fill all required fields"})
    }

    if(error.errorResponse) {
        return res.status(409).json({"Message": "User already exist"})
    }

    res.status(418).json({"Message": "Some error from MongoDB / Mongoose, That developer haven't configured yet"})
}

export { user_Form_Validator }