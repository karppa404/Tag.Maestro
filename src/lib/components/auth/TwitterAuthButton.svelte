<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Twitter } from '@lucide/svelte';
	import { signInWithTwitter } from '$lib/client/auth-client';
</script>

<main class="-mb-4 flex h-full w-full flex-col items-center justify-center gap-6">
	<Button class="inline-flex gap-5 bg-black " onclick={() => signInWithTwitter()}>
	<Twitter class="size-6 text-blue-200 "/>
	Sign in with twitter
	</Button>
</main>
