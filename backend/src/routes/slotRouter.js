import { Router } from "express";
import { SlotController } from "../controllers/SlotController.js";

const router = Router();

router
  .route("/")
  .get(SlotController.getAllSlots)
  .post(SlotController.createSlot);

router
  .route("/:id")
  .get(SlotController.getSlotById)
  .put(SlotController.updateSlot)
  .delete(SlotController.deleteSlot);

router.route("/court/:courtId").get(SlotController.getSlotsByCourtId);

export default router;
