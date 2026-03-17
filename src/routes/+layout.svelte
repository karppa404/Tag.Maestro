<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Resizable from "$lib/components/ui/resizable/index.js";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    
</svelte:head>

<ModeWatcher />

 
<Resizable.PaneGroup direction="horizontal" class="max-w-full min-h-screen max-h-screen overflow-hidden">
 <Resizable.Pane defaultSize={75}>
     <ScrollArea class="w-full h-full p-4">

     {@render children()}
     </ScrollArea>
 </Resizable.Pane>
 <Resizable.Handle />
 <Resizable.Pane defaultSize={25}>
  <Resizable.PaneGroup direction="vertical">
      <h1>Welcome to SvelteKit</h1>
      <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

  </Resizable.PaneGroup>
 </Resizable.Pane>
</Resizable.PaneGroup>