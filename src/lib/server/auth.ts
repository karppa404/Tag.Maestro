import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/server/db'; // your drizzle instance
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { username } from 'better-auth/plugins';

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true
	},
	plugins: [sveltekitCookies(getRequestEvent), username()], // make sure this is the last plugin in the array

	database: drizzleAdapter(db, {
		provider: 'pg' // or "mysql", "sqlite"
	})
});
