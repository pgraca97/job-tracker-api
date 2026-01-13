import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// Tabela 'applications'
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  company: varchar("company", { length: 255 }).notNull(),
  position: varchar("position", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).notNull().default("applied"),
  applicationDate: timestamp("application_date").notNull().defaultNow(),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});