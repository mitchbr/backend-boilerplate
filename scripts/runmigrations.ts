// import dotenv from "dotenv";
// import { promises as fs } from 'fs';
// import {
//   FileMigrationProvider,
//   Kysely,
//   Migrator,
//   PostgresDialect,
// } from 'kysely';
// import * as path from 'path';
// import pg from 'pg';

// const { Pool } = pg
// const __dirname = path.resolve();

// dotenv.config();

// async function migrateToLatest() {
//   const db = new Kysely({
//     dialect: new PostgresDialect({
//       pool: new Pool({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//         port: parseInt(process.env.DB_PORT || "5432")
//       }),
//     }),
//   })

//   const migrator = new Migrator({
//     db,
//     provider: new FileMigrationProvider({
//       fs,
//       path,
//       // This needs to be an absolute path.
//       migrationFolder: path.join(__dirname, 'migrations'),
//     }),
//   })

//   const { error, results } = await migrator.migrateToLatest()

//   results?.forEach((it) => {
//     if (it.status === 'Success') {
//       console.log(`migration "${it.migrationName}" was executed successfully`)
//     } else if (it.status === 'Error') {
//       console.error(`failed to execute migration "${it.migrationName}"`)
//     }
//   })

//   if (error) {
//     console.error('failed to migrate')
//     console.error(error)
//     process.exit(1)
//   }

//   await db.destroy()
// }

// migrateToLatest()