<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '$lib/components/navigation/navigaation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Board</title>
</svelte:head>
<ModeWatcher />

<Sidebar.Provider
	class="bg-sidebar p-2 md:p-4 h-screen overflow-hidden flex "
>
	<AppSidebar />

	<main
		class="h-full w-full rounded-md border bg-background drop-shadow-md
		       flex flex-col overflow-hidden "
	>
		<!-- Fixed header -->
		<Navigation />

		<!-- Scrollable content -->
		<div class="flex-1 overflow-y-auto p-2 hide-scrollbar">
			{@render children?.()}
		</div>
	</main>
</Sidebar.Provider>
