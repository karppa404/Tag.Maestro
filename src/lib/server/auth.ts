import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { env } from '$env/dynamic/private';

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    
    emailAndPassword: { 
      enabled: true, 
    }, 
    plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array

});