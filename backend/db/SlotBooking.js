import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { Bookings } from "./Booking.js";
import { Slots } from "./Slot.js";

export const SlotBooking = mysqlTable("slot_booking", {
  bookingId: int("bookingId").references(() => Bookings.id, {
    onDelete: "cascade",
  }),
  slotId: int("slotId").references(() => Slots.id, { onDelete: "cascade" }),
});
