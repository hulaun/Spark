import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

function route(app) {
  app.get("/", (req, res) => {
    res.send("Hello from the root route");
  });
  app.use("/user", userRouter);
  app.use("/auth", authRouter);
}
export default route;
