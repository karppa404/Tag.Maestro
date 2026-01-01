import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

import { db } from './db';
export const auth = betterAuth({
 	secret: process.env.BETTER_AUTH_SECRET!,

 	baseURL: process.env.BETTER_AUTH_URL,

	database: drizzleAdapter(db, {
		provider: 'pg' // or "mysql", "sqlite"
	}),
	
	plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array
 emailAndPassword: {    
        enabled: true
 } ,
	socialProviders: {
        twitter: { 
            clientId: process.env.TWITTER_CLIENT_ID! , 
            clientSecret: process.env.TWITTER_CLIENT_SECRET!, 
        }, 
    },
    
});
