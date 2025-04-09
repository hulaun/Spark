import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue";
import { Sports } from "./Sport";

export const VenueSport = mysqlTable("venue_sport", {
  venueId: varchar("venueId", { length: 36 }).references(() => Venues.id),
  sportId: varchar("sportId", { length: 36 }).references(() => Sports.id),
});
