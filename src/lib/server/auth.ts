import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/private';
import { db } from './db';
export const auth = betterAuth({
  advanced: {
          crossSubDomainCookies: {
              enabled: true,
              domain: "." + new URL(env.BETTER_AUTH_URL).hostname
          },
          defaultCookieAttributes: {
              secure: true,
              httpOnly: true,
              sameSite: "none",  // Allows CORS-based cookie sharing across subdomains
              partitioned: true, // New browser standards will mandate this for foreign cookies
          },
      },
      trustedOrigins: [
        env.BETTER_AUTH_URL
      ],
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
		},
		google: {
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET
		}
	}
});
