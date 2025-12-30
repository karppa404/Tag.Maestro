<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Board</title>
</svelte:head>
<ModeWatcher />

<Sidebar.Provider class="p-2 bg-sidebar ">
  <AppSidebar />
  <main class="w-full max-h-full overflow-hidden bg-background p-2 rounded-md border drop-shadow-md " >
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
