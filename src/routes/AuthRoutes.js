import { SingUp, Login } from "../controller/Auth.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginSchema, signUpSchema } from "../schema/AuthSchema.js";


const authRouter = Router()

// Auth routers

authRouter.post('/login', validateSchema(loginSchema), Login)
authRouter.post('/sign-up', validateSchema(signUpSchema), SingUp)

export default authRouter


