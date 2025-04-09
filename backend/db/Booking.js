import {
  mysqlTable,
  varchar,
  text,
  decimal,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";
import { Users } from "./User";
import { PaymentMethods } from "./PaymentMethod";

export const Bookings = mysqlTable("booking", {
  id: varchar("id", { length: 36 }).primaryKey(),
  userId: varchar("userId", { length: 36 }).references(() => Users.id),
  paymentStatus: varchar("paymentStatus", { length: 50 }),
  totalPrice: decimal("totalPrice", { precision: 10, scale: 2 }),
  paymentMethodId: varchar("paymentMethodId", { length: 36 }).references(
    () => PaymentMethods.id
  ),
  createAt: timestamp("createAt").defaultNow(),
});
