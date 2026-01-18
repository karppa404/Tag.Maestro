<script lang="ts">
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";

	const { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Tag Master</title>
</svelte:head>

<ModeWatcher />
<main class="min-h-screen w-full flex flex-col">
    <div class=" w-full">
        Hello
    </div>

    <div class="h-full w-full">
        {@render children()}
    </div>
</main>
