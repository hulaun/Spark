import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const Sports = mysqlTable("sport", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 255 }).notNull(),
});
