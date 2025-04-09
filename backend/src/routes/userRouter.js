import { Router } from "express";
import UserController from "../controllers/UserController.js";
const router = Router();

router.route("/").get((req, res) => {
  res.send("Hello from user route");
});
router.route("/").get(UserController.index);

export default router;
