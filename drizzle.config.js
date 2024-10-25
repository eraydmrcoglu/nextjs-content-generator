export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:KSL3FIki7zMh@ep-plain-grass-a47bsw2s.us-east-1.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:KSL3FIki7zMh@ep-plain-grass-a47bsw2s.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
};
