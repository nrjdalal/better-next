import { authSchema } from "@/db/schema"
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js"
import postgres from "postgres"

declare global {
  // eslint-disable-next-line
  var db: PostgresJsDatabase
}

let db: PostgresJsDatabase

if (process.env.NODE_ENV === "production") {
  db = drizzle({
    client: postgres(process.env.POSTGRES_URL!, {
      connect_timeout: 10000,
      idle_timeout: 30000,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  })
} else {
  if (!global.db) {
    global.db = drizzle({
      client: postgres(process.env.POSTGRES_URL!, {
        connect_timeout: 10000,
        idle_timeout: 30000,
        max: 20,
      }),
    })
  }
  db = global.db
}

export { authSchema, db }
