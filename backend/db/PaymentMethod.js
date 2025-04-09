import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const PaymentMethods = mysqlTable("payment_method", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }),
});
