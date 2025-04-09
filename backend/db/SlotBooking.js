import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { Bookings } from "./Booking";
import { Slots } from "./Slot";

export const SlotBooking = mysqlTable("slot_booking", {
  bookingId: varchar("bookingId", { length: 36 }).references(() => Bookings.id),
  slotId: varchar("slotId", { length: 36 }).references(() => Slots.id),
});
