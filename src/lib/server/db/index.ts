// src/lib/server/db/index.ts
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import path from 'path';

// For Electron, use app.getPath('userData')
// This will be set from the Electron main process
const dbPath = env.DATABASE_URL || path.join(process.cwd(), 'app.db');

const client = new Database(dbPath);

export const db = drizzle(client, { schema });