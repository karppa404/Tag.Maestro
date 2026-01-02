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
