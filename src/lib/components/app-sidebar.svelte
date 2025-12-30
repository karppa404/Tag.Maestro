<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import { Map, Search, Dices, Hash, House,PlusCircle } from '@lucide/svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Favicon from '$lib/assets/favicon.svg';
	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '/',
			icon: House
		},
		{
			title: 'Explore',
			url: '#',
			icon: Map,
			subItems: [
				{
					title: 'Search',
					url: '/search',
					icon: Search
				},
				{
					title: 'Tags / Category',
					url: '/tags',
					icon: Hash
				},
				{
					title: 'Random',
					url: '/random',
					icon: Dices
				}
			]
		},
		{
			title: 'post',
			url: '/post',
			icon: PlusCircle
		},
	];
</script>

<Sidebar.Root class="border-none p-2 ">
	<Sidebar.Header class="inline-flex items-center gap-4">
		<img src={Favicon} alt="ico" class="size-1/2" />
		<h1 class="text-2xl font-bold text-primary underline">[AppNameTBD].party</h1>
	</Sidebar.Header>

	<Sidebar.Content class="px-2">
		{#each items as item (item.title)}
			{#if item.subItems}
				<Collapsible.Root class="group/collapsible">
					<Sidebar.Group>
						<Sidebar.GroupLabel class="px-0">
							{#snippet child({ props })}
								<Collapsible.Trigger
									{...props}
									class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors 
									hover:bg-foreground/10 "
								>
									<item.icon class="size-4" />
									<span class="flex-1 text-left">{item.title}</span>
									<ChevronDown
										class="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180"
									/>
								</Collapsible.Trigger>
							{/snippet}
						</Sidebar.GroupLabel>
						<Collapsible.Content>
							<Sidebar.GroupContent>
								<Sidebar.Menu>
									{#each item.subItems as subItem (subItem.title)}
										<Sidebar.MenuItem>
											<Sidebar.MenuButton>
												{#snippet child({ props })}
													<a
														href={subItem.url}
														{...props}
														class="flex items-center gap-2 rounded-md px-3 py-2 pl-9 text-sm 
														transition-colors hover:bg-foreground/10"
													>
														<subItem.icon class="h-4 w-4" />
														<span>{subItem.title}</span>
													</a>
												{/snippet}
											</Sidebar.MenuButton>
										</Sidebar.MenuItem>
									{/each}
								</Sidebar.Menu>
							</Sidebar.GroupContent>
						</Collapsible.Content>
					</Sidebar.Group>
				</Collapsible.Root>
			{:else}
				<Sidebar.Group>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a
											href={item.url}
											{...props}
											class="flex items-center gap-2 rounded-md px-3 py-2 text-sm 
											transition-colors hover:bg-foreground/10"
										>
											<item.icon class="h-4 w-4" />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			{/if}
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer>
		<ThemeToggle />
	</Sidebar.Footer>
</Sidebar.Root>
