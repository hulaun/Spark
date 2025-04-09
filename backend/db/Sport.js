import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const Sports = mysqlTable("sport", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});
