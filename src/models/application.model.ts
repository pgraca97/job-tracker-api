import { drizzle } from "drizzle-orm/node-postgres";
import pool from "../config/db.js";
import { applications } from "../db/schema.js";

const db = drizzle(pool);

export const applicationModel = {
  create: async (data: {
    company: string;
    position: string;
    status?: string;
    notes?: string;
  }) => {
    const result = await db.insert(applications).values(data).returning();
    return result[0];
  },

  getAll: async () => {
    return await db.select().from(applications);
  },
};