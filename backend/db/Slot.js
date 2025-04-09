import {
  mysqlTable,
  varchar,
  timestamp,
  decimal,
  boolean,
} from "drizzle-orm/mysql-core";
import { Courts } from "./Court";

export const Slots = mysqlTable("slot", {
  id: varchar("id", { length: 36 }).primaryKey(),
  courtId: varchar("courtId", { length: 36 }).references(() => Courts.id),
  startTime: timestamp("startTime").notNull(),
  endTime: timestamp("endTime").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  isDiscounted: boolean("isDiscounted").default(false),
  discountAmount: decimal("discountAmount", { precision: 10, scale: 2 }),
});
