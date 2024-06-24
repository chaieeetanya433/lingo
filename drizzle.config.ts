import "dotenv/config";
import { defineConfig } from "drizzle-kit";

let str = "";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set.");
} else {
    str = process.env.DATABASE_URL;
}

export default defineConfig({
    schema: "./db/schema.ts",
    dialect: "postgresql", // Update according to your database
    out: "./drizzle",
    // driver: "pg", // Optional, if applicable
    dbCredentials: {
        url: str,
    },
});