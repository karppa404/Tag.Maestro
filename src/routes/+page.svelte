<script lang="ts">
    import MarketCard from "$lib/components/MarketCard.svelte"
    import { getBalance } from "$lib/remote/data.remote";
    const query = await getBalance();
    console.log((query))

</script>

<MarketCard/>

{#if query.error}
    <p>oops!</p>
{:else if query.loading}
    <p>loading...</p>
{:else if query}
    <p>Available Balance: ${((query ?? 0) / 100).toFixed(2)}</p>
    
{/if}