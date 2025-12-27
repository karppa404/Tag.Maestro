<script lang="ts">
	import { House, Theater, Menu, User } from '@lucide/svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import ThemeToggle from '$lib/components/Theme-Toggle.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { authClient } from '$lib/client/auth-client';
	import { resolve } from '$app/paths';

	const session = authClient.useSession();
</script>

<nav class="sticky top-0 z-50 mx-auto flex w-full items-end justify-end bg-background md:py-1">
	{#if $session.isPending}
		<Skeleton class="size-9 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-2 w-10" />
			<Skeleton class="h-1 w-5" />
		</div>
	{:else if $session.data}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="focus:outline-none">
				<div class="flex items-center gap-3 rounded-md px-2 py-1 transition hover:bg-accent/10">
					<Menu />
					<Avatar.Root class="h-9 w-9">
						<Avatar.Image src={$session.data.user.image} alt={$session.data.user.name} />
						<Avatar.Fallback>
							{$session.data.user.name?.[0]}
						</Avatar.Fallback>
					</Avatar.Root>

					<div class="hidden flex-col text-left leading-tight sm:flex">
						<span class="text-sm font-medium">
							{$session.data.user.name}
						</span>
						<span class="text-xs text-muted-foreground">
							{$session.data.user.username}
						</span>
					</div>
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content align="end" class="w-56">
				<DropdownMenu.Label>Pages</DropdownMenu.Label>

				<DropdownMenu.Separator />
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger>Boards</DropdownMenu.SubTrigger>
					<DropdownMenu.SubContent>
						<DropdownMenu.Item>Email</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Message</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>More...</DropdownMenu.Item>
					</DropdownMenu.SubContent>
				</DropdownMenu.Sub>


				<DropdownMenu.Item>
					<a
						href={resolve('/theater')}
						class="inline-flex items-center gap-2 rounded-md text-sm font-medium transition hover:bg-accent/10"
					>
						<Theater class="h-4 w-4" />
						<span>Theater</span>
					</a>
				</DropdownMenu.Item>
				<DropdownMenu.Separator />

				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />

				<DropdownMenu.Item>
					<a href={resolve('/profile')} class="flex items-center gap-2">
						<User class="h-4 w-4" />
						Profile
					</a>
				</DropdownMenu.Item>

				<DropdownMenu.Separator />


				<DropdownMenu.Item
					class="text-destructive focus:text-destructive"
					onclick={async () => {
						await authClient.signOut();
					}}
				>
					Sign out
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{:else}
		<a
			href={resolve('/auth')}
			class="rounded-md px-3 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
		>
			Sign in
		</a>
	{/if}

	<!-- Mobile hamburger menu -->
	<ThemeToggle />
</nav>
