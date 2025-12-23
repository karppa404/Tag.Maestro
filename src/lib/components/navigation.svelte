<script lang="ts">
	import { House, Theater, Menu, User } from '@lucide/svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import ThemeToggle from '$lib/components/Theme-Toggle.svelte'
	import { authClient } from '$lib/client/auth-client';
	const session = authClient.useSession();
</script>

<div class="sticky top-0 z-50 w-full bg-background md:py-5">
	<nav
		class="mx-auto flex w-full items-center justify-end"
	>
		{#if $session.data}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="focus:outline-none">
					<div class="flex items-center gap-3 rounded-md px-2 py-1 transition hover:bg-accent/10">
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
					<DropdownMenu.Item>
						<a
							href="/"
							class="inline-flex items-center gap-2 rounded-md text-sm font-medium transition hover:bg-accent/10"
						>
							<House class="h-4 w-4" />
							<span>Home</span>
						</a>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />

					<DropdownMenu.Item>
						<a
							href="/Theater"
							class="inline-flex items-center gap-2 rounded-md text-sm font-medium transition hover:bg-accent/10"
						>
							<Theater class="h-4 w-4" />
							<span>Theater</span>
						</a>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />

					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />

					<DropdownMenu.Item asChild>
						<a href="/profile" class="flex items-center gap-2">
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
				href="/auth"
				class="rounded-md px-3 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
			>
				Sign in
			</a>
		{/if}

		<!-- Mobile hamburger menu -->
		<ThemeToggle/>



	</nav>
</div>
