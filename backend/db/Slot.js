import {
  mysqlTable,
  int,
  time,
  decimal,
  mysqlEnum,
  datetime,
  varchar,
} from "drizzle-orm/mysql-core";
import { Courts } from "./Court";

export const Slots = mysqlTable("slot", {
  id: int("id").primaryKey().autoincrement(),

  courtId: int("courtId")
    .notNull()
    .references(() => Courts.id),

  dayOfWeek: mysqlEnum("day_of_week", [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]).notNull(),

  hourStart: time("hour_start").notNull(),
  hourEnd: time("hour_end").notNull(),

  status: mysqlEnum("status", ["available", "booked", "unavailable"])
    .default("available")
    .notNull(),

  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  isDiscounted: boolean("isDiscounted").default(false),
  discountType: mysqlEnum("discount_type", ["percentage", "fixed"]),

  discount: decimal("discount", { precision: 10, scale: 2 }).default("0.00"),

  createdAt: datetime("created_at").notNull().defaultNow(),

  updatedAt: datetime("updated_at").notNull().defaultNow().onUpdateNow(),
});
