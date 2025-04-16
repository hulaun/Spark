import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import { Users } from "./User.js";
import { Sports } from "./Sport.js";

export const UserSport = mysqlTable("user_sport", {
  userId: int("userId").references(() => Users.id),
  sportId: int("sportId").references(() => Sports.id),
});
