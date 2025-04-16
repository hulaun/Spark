import {
  mysqlTable,
  varchar,
  decimal,
  timestamp,
  serial,
  int,
} from "drizzle-orm/mysql-core";
import { Users } from "./User.js";
import { PaymentMethods } from "./PaymentMethod.js";

export const Bookings = mysqlTable("booking", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("userId").references(() => Users.id),
  paymentStatus: varchar("paymentStatus", { length: 50 }),
  totalPrice: decimal("totalPrice", { precision: 10, scale: 2 }),
  paymentMethodId: int("paymentMethodId").references(() => PaymentMethods.id),
  createAt: timestamp("createAt").defaultNow(),
});
