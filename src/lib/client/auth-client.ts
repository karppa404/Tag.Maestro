import { createAuthClient } from "better-auth/svelte"
import { env } from "$env/dynamic/public"
import { anonymousClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: env.PUBLIC_BETTER_AUTH_URL,
    plugins: [
        anonymousClient()
    ]
})