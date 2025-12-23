import { createAuthClient } from "better-auth/svelte"; // make sure to import from better-auth/svelte

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000" // The base URL of your auth server

});
