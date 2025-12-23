<script lang="ts">
	import { page } from '$app/stores';
	import UnderConstruction from '$lib/components/UnderConstruciton.svelte';
</script>

<main class="h-full w-full">
	<UnderConstruction route={$page.url.pathname} />
</main>
