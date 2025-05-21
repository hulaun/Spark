import { Router } from "express";
import { CourtController } from "../controllers/CourtController.js";

const router = Router();

router
  .route("/")
  .get(CourtController.getAllCourts)
  .post(CourtController.createCourt);

router
  .route("/:id")
  .get(CourtController.getCourtById)
  .put(CourtController.updateCourt)
  .delete(CourtController.deleteCourt);

export default router;
