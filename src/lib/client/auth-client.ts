<<<<<<< HEAD
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
=======
import { createAuthClient } from 'better-auth/svelte';
import { usernameClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
	plugins: [usernameClient()]
});

// export async function signInWithTwitter() {
// 	await authClient.signIn.social({
// 		provider: 'twitter',
// 		callbackURL: '/api/auth/callback/twitter',
// 		errorCallbackURL: '/'
// 	});
// }
export async function signInWitGithub() {
	await authClient.signIn.social({
		provider: 'github'
	});
}
export async function signInWithGoogle() {
	await authClient.signIn.social({
		provider: 'google'
	});
}
>>>>>>> a9a9c569f62f5bad8871a9553677cee69bffed71
