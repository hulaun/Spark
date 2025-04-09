import { mysqlTable, varchar, double, text } from "drizzle-orm/mysql-core";
import { Ratings } from "./Rating";
import { Users } from "./User";

export const Venues = mysqlTable("venue", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  ratingId: varchar("ratingId", { length: 36 }).references(() => Ratings.id),
  address: varchar("address", { length: 255 }),
  latitude: double("latitude"),
  longitude: double("longitude"),
  description: text("description"),
  imageUrl: varchar("imageUrl", { length: 255 }),
  managerId: varchar("managerId", { length: 36 }).references(() => Users.id),
});
