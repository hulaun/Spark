import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { Venues } from "./Venue.js";
import { Sports } from "./Sport.js";

export const VenueSport = mysqlTable("venue_sport", {
  venueId: int("venueId").references(() => Venues.id),
  sportId: int("sportId").references(() => Sports.id),
});
