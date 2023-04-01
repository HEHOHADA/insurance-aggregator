import {PrismaClient} from "database";

export function initDatabaseConnection(): PrismaClient {
  const db = new PrismaClient();

  return db;
}
