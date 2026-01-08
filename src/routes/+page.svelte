<script lang="ts">
    import { authClient } from "$lib/client/auth-client";
    const user = await authClient.signIn.anonymous();

</script>
{user.data?.token}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
