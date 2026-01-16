import type { PageServerLoad } from "./$types";
import { api } from "$convex/_generated/api";
import { createConvexHttpClient } from "@mmailaender/convex-better-auth-svelte/sveltekit";

export const load: PageServerLoad = async ({ locals }) => {
  const client = createConvexHttpClient({ token: locals.token });

  const currentUser = await client.query(api.auth.getCurrentUser, {});
  return { currentUser };
};