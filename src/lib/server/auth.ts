import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/private';
import { db } from './db';
export const auth = betterAuth({
	secret: env.BETTER_AUTH_SECRET!,

	baseURL: env.BETTER_AUTH_URL,

	database: drizzleAdapter(db, {
		provider: 'pg' // or "mysql", "sqlite"
	}),

	plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array
	emailAndPassword: {
		enabled: true
	},
	socialProviders: {

		github: {
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET
		}
	}
});
