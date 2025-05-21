import { BookingService } from "../service/BookingService.js";

async function getAllBookings(req, res) {
  try {
    const bookings = await BookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
}

async function getBookingById(req, res) {
  try {
    const { id } = req.params;
    const booking = await BookingService.getBookingById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    res.status(500).json({ message: "Failed to fetch booking" });
  }
}

async function createBooking(req, res) {
  try {
    const data = req.body;
    const newBooking = await BookingService.createBooking(data);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
}

async function updateBooking(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedBooking = await BookingService.updateBooking(id, data);
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Failed to update booking" });
  }
}

async function deleteBooking(req, res) {
  try {
    const { id } = req.params;
    const deletedBooking = await BookingService.deleteBooking(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: "Failed to delete booking" });
  }
}

export const BookingController = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
