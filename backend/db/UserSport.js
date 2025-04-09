import { mysqlTable, varchar, text } from "drizzle-orm/mysql-core";
import { Users } from "./User";
import { Sports } from "./Sport";

export const UserSport = mysqlTable("user_sport", {
  userId: varchar("userId", { length: 36 }).references(() => Users.id),
  sportId: varchar("sportId", { length: 36 }).references(() => Sports.id),
});
