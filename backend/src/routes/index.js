import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import initialsRouter from "./initialsRouter.js";

function route(app) {
  app.use("/user", userRouter);
  app.use("/auth", authRouter);
  app.use("/initials", initialsRouter);
}
export default route;
