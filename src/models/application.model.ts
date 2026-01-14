import { drizzle } from "drizzle-orm/node-postgres";
import pool from "../config/db.js";
import { applications } from "../db/schema.js";
import { eq } from "drizzle-orm";

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

  getById: async (id: number) => {
    const result = await db
      .select()
      .from(applications)
      .where(eq(applications.id, id));
    return result[0];
  },

  update: async (id: number, data: Partial<{
    company: string;
    position: string;
    status: string;
    notes: string;
  }>) => {
    const result = await db
      .update(applications)
      .set(data) // Apenas os campos fornecidos em data serão atualizados
      .where(eq(applications.id, id))
      .returning();
    return result[0];
  },

  delete: async (id: number) => {
    const result = await db
      .delete(applications)
      .where(eq(applications.id, id))
      .returning();
    return result.length > 0;
  },
};