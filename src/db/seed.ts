import pool from "../config/db.js";
import { drizzle } from "drizzle-orm/node-postgres";
import { applications } from "../db/schema.js";

const db = drizzle(pool);

const dummyData = [
  {
    company: "Blip",
    position: "Backend Developer",
    status: "applied",
    notes: "Candidatura via LinkedIn. Stack: Node.js, PostgreSQL",
  },
  {
    company: "Talkdesk",
    position: "Fullstack Developer",
    status: "interview",
    notes: "Primeira entrevista marcada para dia 20",
  },
  {
    company: "Feedzai",
    position: "Backend Developer",
    status: "rejected",
    notes: "Feedback: pouca experiência em Scala",
  },
  {
    company: "Critical Software",
    position: "Software Engineer",
    status: "applied",
    notes: null,
  },
  {
    company: "Landing.Jobs",
    position: "Junior Developer",
    status: "offer",
    notes: "Proposta recebida - 28k/ano. A considerar",
  },
];


const seed = async () => {
  try {
    console.log("Seeding database...");

    await db.insert(applications).values(dummyData);

    console.log("Done!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

// Executa o seed
seed();