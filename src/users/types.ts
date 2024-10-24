import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely';

export interface UserTable {
  id: Generated<string>
  username: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>
