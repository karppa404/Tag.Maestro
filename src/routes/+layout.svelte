<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<main class="w-full min-h-screen flex flex-col items-center p-2">
<div class="md:max-w-5xl h-full">
	{@render children()}

</div>
</main>
