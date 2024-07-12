import { Router } from "express";
import user_Routes from "./user.router";

const Routes = Router()

Routes.use('/users', user_Routes)

export default Routes