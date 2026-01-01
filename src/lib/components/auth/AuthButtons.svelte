<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Github } from '@lucide/svelte';
	import { signInWitGithub } from '$lib/client/auth-client';
</script>

<main class="-mb-4 flex h-full w-full flex-col items-center justify-center gap-6">
	<Button class="inline-flex gap-5 bg-black " onclick={() => signInWitGithub()}>
	<Github class="size-6 text-blue-200 "/>
	Sign in with github
	</Button>
</main>
