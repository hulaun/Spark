import { mysqlTable, int, text, serial } from "drizzle-orm/mysql-core";
import { Users } from "./User.js";

export const Ratings = mysqlTable("rating", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("userId").references(() => Users.id),
  rating: int("rating"),
  comment: text("comment"),
});
