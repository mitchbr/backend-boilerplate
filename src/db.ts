import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
    host: process.env.POSTGRESDB_HOST,
    port: parseInt(
        process.env.POSTGRESDB_PORT ? process.env.POSTGRESDB_PORT : "5432"
    ),
    user: process.env.POSTGRESDB_USER,
    password: process.env.POSTGRESDB_ROOT_PASSWORD,
    database: process.env.POSTGRESDB_DATABASE
})

module.exports = pool