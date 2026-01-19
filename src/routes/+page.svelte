<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable';
    import { api } from "../convex/_generated/api";
    import {useQuery} from 'convex-svelte';
  // Use the Convex client to subscribe to the query
  const files = useQuery(api.files.listAllFiles, {});
</script>

<main class="flex h-full w-full flex-col">
	<Resizable.PaneGroup direction="horizontal" class="w-full flex-1 rounded-lg">
		<Resizable.Pane defaultSize={75}>
<!-- Mason layout -->
		
{#if files === undefined}
  <p>Loading files...</p>
{:else if files === 0}
  <p>No files found.</p>
{:else}
  {#each files as file}
    <img src={file.url} alt={"name"}/>
  {/each}
{/if}
		
		
		
		
		
		
		
		
		</Resizable.Pane>

		<Resizable.Handle withHandle />

		<Resizable.Pane defaultSize={25} minSize={15} maxSize={25}>
			<div class="flex h-full w-full items-center justify-center p-6">
				<span class="font-semibold">Content</span>
				What is up guys
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>
</main>
