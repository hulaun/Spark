import { Router } from "express";
import { SportController } from "../controllers/SportController.js";

const router = Router();

router
  .route("/")
  .get(SportController.getAllSports)
  .post(SportController.createSport);

router
  .route("/:id")
  .get(SportController.getSportById)
  .put(SportController.updateSport)
  .delete(SportController.deleteSport);

export default router;
