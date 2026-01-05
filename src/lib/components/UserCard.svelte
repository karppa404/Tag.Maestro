<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { authClient } from '@/client/auth-client';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index';

	const session = authClient.useSession();
</script>

{#if $session.isPending}
	<div class="flex items-center space-x-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[50px]" />
			<Skeleton class="h-4 w-[40px]" />
		</div>
	</div>
{:else if $session.data}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="rounded-md bg-accent/70 p-3 "
			>{$session.data.user.name}</DropdownMenu.Trigger
		>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item><a href="/">Home</a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/">Theater</a></DropdownMenu.Item>
                				<DropdownMenu.Separator />

				<DropdownMenu.Item>
					<Button
						onclick={async () => {
							await authClient.signOut();
						}}
						class="w-fit py-6 text-base"
					>
						Sign Out
					</Button>
                    </DropdownMenu.Item
				>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else}
	<a href="/auth">Login</a>
{/if}
