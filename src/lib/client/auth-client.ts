import { createAuthClient } from "better-auth/svelte"; // make sure to import from better-auth/svelte
import { env } from '$env/dynamic/public';
export const authClient = createAuthClient({
  baseURL: env.PUBLIC_BASE_URL
});

export const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
