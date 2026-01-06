<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { MessageCircle } from '@lucide/svelte';
	let {
		username,
		title,
		body,
		imgs,
		subtitle,
		postId,
		board,
		commentCount
	}: {
		commentCount: number;
		postId: string;
		board: string;
		username: string;
		title: string;
		body: string;
		imgs: string[];
		subtitle: string;
	} = $props();
</script>

	<Card.Root class="w-full gap-6  bg-sidebar ">
		<a href={board+"/"+"post"+"/"+postId} class="transition-all hover:brightness-85">

		<Card.Header class="gap-2">
			<p class="text-primary">{username}</p>
			<Card.Title class="text-xl font-bold">{title}</Card.Title>
			<Card.Description>{subtitle}</Card.Description>
		</Card.Header>
		</a>
		<Card.Content class="flex w-full flex-row ">
			<div class="line-clamp-3 overflow-hidden">
				{body}
			</div>
		</Card.Content>
		<Card.Footer class="relative flex flex-col gap-4">
			<div class="w-full items-center">
				<Carousel.Root
					opts={{
						align: 'start'
					}}
					class="w-full"
				>
					<Carousel.Content class="">
						{#each imgs as img, index}
							<Carousel.Item class="md:basis-1/2 lg:basis-3/11">
								<img
									src={img}
									alt="preview img"
									class="aspect-square overflow-hidden rounded-md object-cover"
								/>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="left-2" />
					<Carousel.Next class="right-2" />
				</Carousel.Root>
			</div>
			<div class="inline-flex w-full items-start justify-start gap-2">
				<MessageCircle />
				{commentCount}
			</div>
		</Card.Footer>
	</Card.Root>

