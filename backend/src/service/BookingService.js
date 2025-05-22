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
  const result = await db.insert(Bookings).values(data).execute();
  const insertedId = result.insertId;
  const newBooking = await db
    .select()
    .from(Bookings)
    .where(eq(Bookings.id, insertedId))
    .limit(1)
    .execute();
  return newBooking[0];
};

const updateBooking = async (id, data) => {
  await db.update(Bookings).set(data).where(eq(Bookings.id, id)).execute();
  const updatedBooking = await db
    .select()
    .from(Bookings)
    .where(eq(Bookings.id, id))
    .limit(1)
    .execute();
  return updatedBooking[0];
};

const deleteBooking = async (id) => {
  const bookingToDelete = await db
    .select()
    .from(Bookings)
    .where(eq(Bookings.id, id))
    .limit(1)
    .execute();

  if (!bookingToDelete[0]) {
    return null;
  }

  await db.delete(Bookings).where(eq(Bookings.id, id)).execute();
  return bookingToDelete[0];
};

export const BookingService = {
  getBookingById,
  getAllBookings,
  getBookingsByUserId,
  createBooking,
  updateBooking,
  deleteBooking,
};
