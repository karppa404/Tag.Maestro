<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Slash } from '@lucide/svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	
	let crumbs = $derived(
		page.url.pathname
			.split('/')
			.filter(segment => segment.length > 0)
			.map((segment, index, array) => ({
				label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
				href: '/' + array.slice(0, index + 1).join('/')
			}))
	);
</script>

<div class="flex items-center gap-4 w-full">
	<Sidebar.Trigger />
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href={resolve('/')}>
					Home
				</Breadcrumb.Link>
			</Breadcrumb.Item>
			{#each crumbs as crumb, i (crumb.href)}
				<Breadcrumb.Separator>
					<Slash class="h-4 w-4" />
				</Breadcrumb.Separator>
				<Breadcrumb.Item>
					{#if i === crumbs.length - 1}
						<Breadcrumb.Page>
							{crumb.label}
						</Breadcrumb.Page>
					{:else}
						<Breadcrumb.Link href={resolve(crumb.href)}>
							{crumb.label}
						</Breadcrumb.Link>
					{/if}
				</Breadcrumb.Item>
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
	<ThemeToggle />
</div>