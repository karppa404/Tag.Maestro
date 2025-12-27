<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/navigation.svelte';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<ModeWatcher />
<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Board</title>
</svelte:head>
<main class="flex min-h-screen w-full flex-col items-center">
	<section class=" h-full w-full md:max-w-4xl md:min-w-4xl">
		<Navigation />
		<QueryClientProvider client={queryClient}>
			{@render children?.()}
		</QueryClientProvider>
	</section>
</main>
