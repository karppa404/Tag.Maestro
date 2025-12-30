import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { username } from 'better-auth/plugins';

import { db } from './db';
export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg' // or "mysql", "sqlite"
	}),
	plugins: [sveltekitCookies(getRequestEvent), username()], // make sure this is the last plugin in the array
	emailAndPassword: {
		enabled: true
	}
});
