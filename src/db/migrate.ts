import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pool from "../config/db.js";

const runMigrations = async () => {
  try {
    console.log("Running migrations...");

    // Instância do Drizzle ORM
    const db = drizzle(pool);

    // Aplica todas as migrations que ainda não foram aplicadas
    await migrate(db, { migrationsFolder: "./migrations" });

    console.log("Migration successful!");

    // Fecha todas as conexões do pool
    await pool.end();
  } catch (err) {
    console.error("❌ Migration failed!");
    console.error(err);
    process.exit(1); // Sai com código de erro
  }
};

// Executa as migrations
runMigrations();