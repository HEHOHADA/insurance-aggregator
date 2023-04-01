import { PrismaClient } from "database";

export async function initDatabaseConnection(): Promise<PrismaClient> {
  const db = new PrismaClient();
  await db.$connect();

  return db;
}
