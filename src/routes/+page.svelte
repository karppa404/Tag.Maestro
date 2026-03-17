<script lang="ts">
    import MarketCard from "$lib/components/MarketCard.svelte"
    import { getBalance } from "$lib/remote/data.remote";
    const query = getBalance();
    console.log(JSON.stringify(query))
</script>

<MarketCard/>

{#if query.error}
    <p>oops!</p>
{:else if query.loading}
    <p>loading...</p>
{:else}
    current Balance: {(query)}
{/if}