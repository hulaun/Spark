import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const PaymentMethods = mysqlTable("payment_method", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
});
