import { Router } from "express";
import { loginController, signConroller,checkAuthController, logoutController, refreshTokenController } from "../controllers/auth.controller.js";
import {isAuthenticated} from "../middlewares/isAuthecticated.js"
const authRoute = Router()

authRoute.route('/sign-up').post(signConroller);
authRoute.route('/login').post(loginController);
authRoute.route('/refresh-token').get(refreshTokenController);
authRoute.route('/check-auth').get(isAuthenticated, checkAuthController)
authRoute.route("/logout").get(isAuthenticated,logoutController)



export default authRoute;