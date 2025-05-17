import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue.js";

export const Courts = mysqlTable("court", {
  id: int("id").primaryKey().autoincrement(),
  venueId: int("venueId").references(() => Venues.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }),
});
