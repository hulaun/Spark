import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
const router = Router();

router.route("/").get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

router
  .route("/profile/:id")
  .get(UserController.getUserProfile)
  .put(UserController.updateUserProfile);
export default router;
