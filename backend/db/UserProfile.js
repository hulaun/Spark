import { mysqlTable, varchar, text } from "drizzle-orm/mysql-core";
import { Users } from "./User";

export const UserProfile = mysqlTable("user_profile", {
  userId: varchar("userId", { length: 36 })
    .primaryKey()
    .references(() => Users.id),
  bio: text("bio"),
  location: varchar("location", { length: 255 }),
  availableDays: varchar("availableDays", { length: 100 }), // could be JSON if array
  currentStatus: varchar("currentStatus", { length: 100 }),
});
