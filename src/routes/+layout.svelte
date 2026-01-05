<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
	import UserCard from '@/components/UserCard.svelte';
	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Karppa.party</title>
    <ModeWatcher />
</svelte:head>


<main class="w-full flex flex-col items-center min-w-3xl">
	<div class="md:max-w-3xl p-2">
<UserCard/>
{@render children()}
	</div>
</main>

