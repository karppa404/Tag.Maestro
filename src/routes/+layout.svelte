<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<ModeWatcher />
<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Board</title>
</svelte:head>
<main class="h-full w-full flex flex-col items-center">
    <section class="w-full md:max-w-4xl md:min-w-4xl">
       	<Navigation />
	{@render children?.()}
    </section>

</main>
