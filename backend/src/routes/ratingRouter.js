import { Router } from "express";
import { RatingController } from "../controllers/RatingController.js";

const router = Router();

router
  .route("/")
  .get(RatingController.getAllRatings)
  .post(RatingController.createRating);

router
  .route("/:id")
  .get(RatingController.getRatingById)
  .put(RatingController.updateRating)
  .delete(RatingController.deleteRating);

router.route("/user/:userId").get(RatingController.getRatingsByUserId);

export default router;
