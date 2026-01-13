import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Cria e configura o pool de conexões ao PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: { 
    rejectUnauthorized: false 
  },
});

export default pool;