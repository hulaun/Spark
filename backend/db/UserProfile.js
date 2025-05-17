import { mysqlTable, varchar, text, int } from "drizzle-orm/mysql-core";
import { Users } from "./User.js";

export const UserProfile = mysqlTable("user_profile", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("userId")
    .notNull()
    .references(() => Users.id, { onDelete: "cascade" }),
  bio: text("bio"),
  location: varchar("location", { length: 255 }),
  availableDays: varchar("availableDays", { length: 100 }),
  currentStatus: varchar("currentStatus", { length: 100 }),
});
