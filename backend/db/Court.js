import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue";

export const Courts = mysqlTable("court", {
  id: varchar("id", { length: 36 }).primaryKey(),
  venueId: varchar("venueId", { length: 36 }).references(() => Venues.id),
  name: varchar("name", { length: 255 }),
});
