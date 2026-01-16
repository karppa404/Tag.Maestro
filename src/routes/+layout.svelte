<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Resizable from "$lib/components/ui/resizable/index.js";
	import { ModeWatcher } from "mode-watcher";
import Navigation from '@/components/Navigation.svelte';
import { createSvelteAuthClient } from '@mmailaender/convex-better-auth-svelte/svelte'; 
import { authClient } from '$lib/auth-client'; 
createSvelteAuthClient({ authClient });
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<main class="w-full min-h-screen max-h-screen flex flex-col ">
    <Navigation/>
    <Resizable.PaneGroup direction="horizontal" class="flex-1 w-full h-full" >
     
      <Resizable.Pane defaultSize={75} minSize={60} class="border-none">{@render children()}</Resizable.Pane>
      <Resizable.Handle withHandle />
      <Resizable.Pane>Two</Resizable.Pane>
    </Resizable.PaneGroup>
    
</main>
