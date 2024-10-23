#!/bin/bash
migrationname=$1
datestring=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

filename="${datestring}_${migrationname}"

touch migrations/$filename.ts

printf "%s\n"                                                  \
"import { Kysely, sql } from 'kysely'"                         \
"import { v4 as uuidv4 } from 'uuid'"                          \
""                                                             \
"export async function up(db: Kysely<any>): Promise<void> {"   \
"  await db.schema"                                            \
"    .createTable('${migrationname}')"                         \
"    .addColumn('id', 'varchar(36)', (col) => col.primaryKey().defaultTo(uuidv4()))"    \
"    .addColumn('created_at', 'timestamp', (col) =>"           \
"      col.defaultTo(sql\`now()\`).notNull(),"                 \
"    )"                                                        \
"    .execute()"                                               \
"}"                                                            \
""                                                             \
"export async function down(db: Kysely<any>): Promise<void> {" \
"  await db.schema.dropTable('${migrationname}').execute()"    \
"}" > migrations/$filename.ts

echo "created migration ${filename}"