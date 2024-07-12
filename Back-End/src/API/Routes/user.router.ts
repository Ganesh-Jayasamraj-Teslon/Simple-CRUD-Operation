import { Router } from "express";
import Controllers from "../Controllers";
import Middleware from "../Middleware";

const user_Routes = Router()

user_Routes.post("/create_user", Controllers.Users.create_User, Middleware.user_Form_Validator)
user_Routes.get("/list_all_users", Controllers.Users.list_All_Users)
user_Routes.post('/search_user', Controllers.Users.search_An_User)
user_Routes.put('/update_user', Controllers.Users.update_An_User)
user_Routes.delete('/remove_user', Controllers.Users.Remove_An_User)

export default user_Routes