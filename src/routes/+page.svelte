<script lang="ts">
	import { getBoards } from '@/remote/data.remote';
    import BoardButton from '@/components/BoardButton.svelte';
</script>

<main class="flex h-full w-full flex-col">
	<svelte:boundary>
		<div class="h-full w-full">
			{#each await getBoards() as board (board.id)}
            <BoardButton
                name={board.name}
                link={board.boardLink}
                img={board.bgImgUrl}
            />
				
			{/each}
		</div>
	</svelte:boundary>
</main>
