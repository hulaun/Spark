import { mysqlTable, varchar, timestamp, check } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const Users = mysqlTable(
  "user",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    password: varchar("password", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }),
    phoneNumber: varchar("phoneNumber", { length: 20 }),
    role: varchar("role", { length: 20 }),
    img: varchar("img", { length: 255 }),
    facebookId: varchar("facebookId", { length: 255 }),
    googleId: varchar("googleId", { length: 255 }),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (table) => [
    check("role_check", sql`${table.role} IN ('admin', 'user', 'manager)`),
  ]
);
