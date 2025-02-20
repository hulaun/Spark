import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./db/schema.js",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DB_URL,
  },
  strict: true,
  verbose: true,
});
