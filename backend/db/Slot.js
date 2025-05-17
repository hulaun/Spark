import {
  mysqlTable,
  int,
  time,
  decimal,
  mysqlEnum,
  timestamp,
  boolean,
} from "drizzle-orm/mysql-core";
import { Courts } from "./Court.js";

export const Slots = mysqlTable("Slot", {
  id: int("id").primaryKey().autoincrement(),

  courtId: int("courtId")
    .notNull()
    .references(() => Courts.id, { onDelete: "cascade" }),

  dayOfWeek: mysqlEnum("dayOfWeek", [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]).notNull(),

  hourStart: time("hourStart").notNull(),
  hourEnd: time("hourEnd").notNull(),

  status: mysqlEnum("status", ["available", "booked", "unavailable"])
    .default("available")
    .notNull(),

  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  isDiscounted: boolean("isDiscounted").default(false),
  discountType: mysqlEnum("discountType", ["percentage", "fixed"]),

  discount: decimal("discount", { precision: 10, scale: 2 }).default("0.00"),

  createdAt: timestamp("createdAt").defaultNow(),

  updatedAt: timestamp("updatedAt").onUpdateNow(),
});
