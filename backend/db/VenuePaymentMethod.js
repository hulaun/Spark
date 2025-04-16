import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue.js";
import { PaymentMethods } from "./PaymentMethod.js";

export const VenuePaymentMethod = mysqlTable("venue_payment_method", {
  venueId: int("venueId").references(() => Venues.id),
  paymentId: int("paymentId").references(() => PaymentMethods.id),
});
