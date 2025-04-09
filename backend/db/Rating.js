import { mysqlTable, varchar, int, text } from "drizzle-orm/mysql-core";
import { Users } from "./User";

export const Ratings = mysqlTable("rating", {
  id: varchar("id", { length: 36 }).primaryKey(),
  userId: varchar("userId", { length: 36 }).references(() => Users.id),
  rating: int("rating"),
  comment: text("comment"),
});
