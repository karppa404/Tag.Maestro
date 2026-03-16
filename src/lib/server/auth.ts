import { betterAuth } from "better-auth";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { env } from '$env/dynamic/private';

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index"; // your drizzle instance

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    socialProviders: {
        github: { 
            clientId: env.GITHUB_CLIENT_ID as string, 
            clientSecret: env.GITHUB_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array

});