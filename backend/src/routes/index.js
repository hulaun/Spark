import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import initialsRouter from "./initialsRouter.js";
import slotRouter from "./slotRouter.js";
import bookingRouter from "./bookingRouter.js";
import courtRouter from "./courtRouter.js";
import sportRouter from "./sportRouter.js";
import venueRouter from "./venueRouter.js";
import ratingRouter from "./ratingRouter.js";

function route(app) {
  app.use("/user", userRouter);
  app.use("/auth", authRouter);
  app.use("/initials", initialsRouter);
  app.use("/slot", slotRouter);
  app.use("/booking", bookingRouter);
  app.use("/court", courtRouter);
  app.use("/sport", sportRouter);
  app.use("/venue", venueRouter);
  app.use("/rating", ratingRouter);
}
export default route;
