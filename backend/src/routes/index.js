import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
export const router = Router();
function route() {
  router.use("/user", userRouter);
  router.use("/auth", authRouter);
}
export default route;
