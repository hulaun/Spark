import {
  mysqlTable,
  varchar,
  double,
  text,
  serial,
  int,
} from "drizzle-orm/mysql-core";
import { Ratings } from "./Rating.js";
import { Users } from "./User.js";

export const Venues = mysqlTable("venue", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  ratingId: int("ratingId").references(() => Ratings.id),
  address: varchar("address", { length: 255 }),
  latitude: double("latitude"),
  longitude: double("longitude"),
  description: text("description"),
  imageUrl: varchar("imageUrl", { length: 255 }),
  managerId: int("managerId").references(() => Users.id),
});
