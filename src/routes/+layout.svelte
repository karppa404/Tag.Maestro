<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	setupConvex(PUBLIC_CONVEX_URL);
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>InkTime</title>
</svelte:head>
<ModeWatcher />
<main class="h-full w-full">
	{@render children()}
</main>
