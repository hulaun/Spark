import {
  mysqlTable,
  varchar,
  boolean,
  timestamp,
  decimal,
  int,
  text,
  time,
  primaryKey,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

// Users Table
export const Users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  role: varchar("role", { length: 10 }).notNull(), // 'user', 'owner', 'admin'
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
  ),
});

// Fields Table
export const Fields = mysqlTable("fields", {
  id: varchar("id", { length: 36 }).primaryKey(),
  owner_id: varchar("owner_id", { length: 36 })
    .notNull()
    .references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  location: text("location").notNull(),
  sport_type: varchar("sport_type", { length: 20 }).notNull(), // 'football', 'tennis', 'pickleball'
  price_per_hour: decimal("price_per_hour", {
    precision: 10,
    scale: 2,
  }).notNull(),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at").default(
    sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
  ),
});

// Bookings Table
export const Bookings = mysqlTable("bookings", {
  id: varchar("id", { length: 36 }).primaryKey(),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
  field_id: varchar("field_id", { length: 36 })
    .notNull()
    .references(() => fields.id),
  start_time: timestamp("start_time").notNull(),
  end_time: timestamp("end_time").notNull(),
  total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull(), // 'pending', 'confirmed', 'canceled', 'completed'
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// Payments Table
export const Payments = mysqlTable("payments", {
  id: varchar("id", { length: 36 }).primaryKey(),
  booking_id: varchar("booking_id", { length: 36 })
    .notNull()
    .references(() => bookings.id),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  payment_method: varchar("payment_method", { length: 20 }).notNull(), // 'credit_card', 'paypal', 'cash'
  status: varchar("status", { length: 20 }).notNull(), // 'pending', 'paid', 'failed'
  transaction_id: varchar("transaction_id", { length: 255 }).unique().notNull(),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// Field Availability Table
export const FieldAvailability = mysqlTable("field_availability", {
  id: varchar("id", { length: 36 }).primaryKey(),
  field_id: varchar("field_id", { length: 36 })
    .notNull()
    .references(() => fields.id),
  date: timestamp("date").notNull(),
  start_time: time("start_time").notNull(),
  end_time: time("end_time").notNull(),
  is_available: boolean("is_available").default(true),
});

// Reviews Table
export const Reviews = mysqlTable("reviews", {
  id: varchar("id", { length: 36 }).primaryKey(),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
  field_id: varchar("field_id", { length: 36 })
    .notNull()
    .references(() => fields.id),
  rating: int("rating").notNull(), // 1-5 stars
  comment: text("comment"),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// Notifications Table
export const Notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 36 }).primaryKey(),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
  message: text("message").notNull(),
  is_read: boolean("is_read").default(false),
  created_at: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});
