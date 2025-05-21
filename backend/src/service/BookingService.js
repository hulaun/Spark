import { Bookings } from "../../db/Booking.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getBookingById = async (id) => {
  const booking = await db
    .select()
    .from(Bookings)
    .where(eq(Bookings.id, id))
    .limit(1)
    .execute();
  return booking[0];
};

const getAllBookings = async () => {
  const bookings = await db.select().from(Bookings).execute();
  return bookings;
};

const getBookingsByUserId = async (userId) => {
  const bookings = await db
    .select()
    .from(Bookings)
    .where(eq(Bookings.userId, userId))
    .execute();
  return bookings;
};

const createBooking = async (data) => {
  const newBooking = await db
    .insert(Bookings)
    .values(data)
    .returning()
    .execute();
  return newBooking[0];
};

const updateBooking = async (id, data) => {
  const updatedBooking = await db
    .update(Bookings)
    .set(data)
    .where(eq(Bookings.id, id))
    .returning()
    .execute();
  return updatedBooking[0];
};

const deleteBooking = async (id) => {
  const deletedBooking = await db
    .delete(Bookings)
    .where(eq(Bookings.id, id))
    .returning()
    .execute();
  return deletedBooking[0];
};

export const BookingService = {
  getBookingById,
  getAllBookings,
  getBookingsByUserId,
  createBooking,
  updateBooking,
  deleteBooking,
};
