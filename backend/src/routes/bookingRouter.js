import { Router } from "express";
import { BookingController } from "../controllers/BookingController.js";

const router = Router();

router
  .route("/")
  .get(BookingController.getAllBookings)
  .post(BookingController.createBooking);

router
  .route("/:id")
  .get(BookingController.getBookingById)
  .put(BookingController.updateBooking)
  .delete(BookingController.deleteBooking);

export default router;
