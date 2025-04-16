import express from "express";
import { AuthController } from "../controllers/AuthController.js";

const authRouter = express.Router();

authRouter.post("/register", AuthController.register);

authRouter.post("/login", AuthController.login);

authRouter.post("/forgotPass", AuthController.forgotPassword);

authRouter.post("/verifyOTP", AuthController.verifyOTP);

authRouter.post("/resetPass", AuthController.resetPassword);

export default authRouter;
