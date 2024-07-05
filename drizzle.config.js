import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:pRcPrTVY4C8z@ep-aged-block-a5c71jsp.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});