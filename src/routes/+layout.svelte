
<script lang="ts">
    import './layout.css';
 import { ModeWatcher } from "mode-watcher";
 let { children } = $props();
 import favicon from "$lib/assets/favicon.svg"
</script>
<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Karppa.dev</title>
</svelte:head>
<ModeWatcher />
{@render children?.()}
