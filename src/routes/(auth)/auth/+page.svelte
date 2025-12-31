<script lang="ts">

	import { Button } from '$lib/components/ui/button/index.js';
	import {Twitter} from "@lucide/svelte"
	import signin from "$lib/client/auth-client"

</script>

<main class="-mb-4 flex w-full h-full items-center justify-center flex-col gap-6">
    <Button class="bg-primary inline-flex gap-5" onclick={signin()}><Twitter/>Sign in with twitter</Button>
</main>
