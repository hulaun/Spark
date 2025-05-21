import { Router } from "express";
import { VenueController } from "../controllers/VenueController.js";

const router = Router();

router
  .route("/")
  .get(VenueController.getAllVenues)
  .post(VenueController.createVenue);

router
  .route("/:id")
  .get(VenueController.getVenueById)
  .put(VenueController.updateVenue)
  .delete(VenueController.deleteVenue);

export default router;
