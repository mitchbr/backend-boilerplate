// import { Kysely, sql } from 'kysely'
// import { v4 as uuidv4 } from 'uuid'

// export async function up(db: Kysely<any>): Promise<void> {
//   await db.schema
//     .createTable('users')
//     .addColumn('id', 'varchar(36)', (col) => col.primaryKey().defaultTo(uuidv4()))
//     .addColumn('created_at', 'timestamp', (col) =>
//       col.defaultTo(sql`now()`).notNull(),
//     )
//     .execute()
// }

// export async function down(db: Kysely<any>): Promise<void> {
//   await db.schema.dropTable('users').execute()
// }
