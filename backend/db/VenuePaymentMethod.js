import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue";
import { PaymentMethods } from "./PaymentMethod";

export const VenuePaymentMethod = mysqlTable("venue_payment_method", {
  venueId: varchar("venueId", { length: 36 }).references(() => Venues.id),
  paymentId: varchar("paymentId", { length: 36 }).references(
    () => PaymentMethods.id
  ),
});
