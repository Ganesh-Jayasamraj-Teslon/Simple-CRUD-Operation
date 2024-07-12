import { NextFunction, Request, Response } from 'express'
import Models from '../Model'

async function create_User(req: Request, res: Response, next: NextFunction) {
    const new_user = new Models.user_Model(req.body)
    try {
        await new_user.save()
    } catch (error) {
        return next(error)
    }
    // console.log(`[SUCCESS] - New user created`);
    return res.status(201).json({"Message": "User created"})
}

async function list_All_Users(req: Request, res: Response, next: NextFunction) {
    const all_Users = await Models.user_Model.find({})
    res.json(all_Users)
}

async function search_An_User(req: Request, res: Response, next: NextFunction) {
    const request = req.body    

    if(!request.email && !request.mobile) {
        return res.json({Message: "Enter Number or Email ID"})
    }
    

    if(request.email) {
        const response_Message = await Models.user_Model.findOne({
            email: request.email
        })

        if(!response_Message){
            return res.json({Message: "User does not exist"})
        }

        return res.json({Message: response_Message})
    }

    if(request.mobile) {
        const response_Message = await Models.user_Model.findOne({
            mobile_no: request.mobile
        })

        if(!response_Message){
            return res.json({Message: "User does not exist"})
        }
        return res.json({Message: response_Message})

    }
}

async function update_An_User(req: Request, res: Response, next: NextFunction) {
    const update_User = req.body

    const response = await Models.user_Model.findByIdAndUpdate({_id: update_User._id }, update_User, {new: true})

    return res.json({"Message": "User Updated"})
}

async function Remove_An_User(req: Request, res: Response, next: NextFunction) {
    const request = req.body

    if(!request.email || !request.mobile) {
        return res.status(403).json({Message: "Enter both Email ID and Mobile Number"})
    }

    const response_Message = await Models.user_Model.findOneAndDelete({
        email: request.email,
        mobile_no: request.mobile
    })

    if(!response_Message) {
        return res.status(409).json({Message: "User does not exist"})
    }

    return res.status(204).json({Message: `${response_Message.first_name} ${response_Message.last_name} is removed`})

}

export default { create_User, list_All_Users, search_An_User, update_An_User, Remove_An_User}