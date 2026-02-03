// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';
import path from 'path';
import os from 'os';

// Determine database path based on environment
let dbPath: string;

if (process.env.DATABASE_URL) {
  dbPath = process.env.DATABASE_URL;
} else {
  // For development, use a local path
  // For production Electron, this would be set by the main process
  const appName = 'myapp'; // Change this to your app name
  const userDataPath = path.join(os.homedir(), '.config', appName);
  dbPath = path.join(userDataPath, 'myapp.db');
}

export default defineConfig({
  schema: './src/lib/server/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: { url: dbPath },
  verbose: true,
  strict: true
});