<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Eye, EyeOff } from '@lucide/svelte';

	let showPassword = $state(false);
</script>

<main class="-mb-4 flex w-full h-full items-center justify-center flex-col gap-6">
	<Tabs.Root value="signIn" class="max-w-md min-w-md">
		<Tabs.List>
			<Tabs.Trigger value="signIn">sign In</Tabs.Trigger>
			<Tabs.Trigger value="signUp">sign Up</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="signIn">
			<Card.Root>
				<Card.Header>
					<Card.Title>sign In</Card.Title>
					<Card.Description>Sign in to your Karppa.party account</Card.Description>
				</Card.Header>
				<Card.Content class="grid gap-6">
					<div class="grid gap-3">
						<Label for="Username">Username</Label>
						<Input id="Username" />
					</div>
					<div class="grid gap-3">
						<Label for="password">Password</Label>

						<div class="relative">
							<Input id="password" type={showPassword ? 'text' : 'password'} class="pr-10" />

							<button
								type="button"
								class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onclick={() => (showPassword = !showPassword)}
								aria-label="Toggle password visibility"
							>
								{#if showPassword}
									<EyeOff class="h-4 w-4" />
								{:else}
									<Eye class="h-4 w-4" />
								{/if}
							</button>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button>Sign In</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="signUp">
			<Card.Root>
				<Card.Header>
					<Card.Title>Sign Up</Card.Title>
					<Card.Description>Create your account for Karppa.party</Card.Description>
				</Card.Header>
				<Card.Content class="grid gap-6">
					<div class="grid gap-3">
						<Label for="">Username</Label>
						<Input id="username" type="username" />
					</div>
					<div class="grid gap-3">
						<Label for="name">Displayname</Label>
						<Input id="name" type="name" />
					</div>
					<div class="grid gap-3">
						<Label for="password">Password</Label>

						<div class="relative">
							<Input id="password" type={showPassword ? 'text' : 'password'} class="pr-10" />

							<button
								type="button"
								class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onclick={() => (showPassword = !showPassword)}
								aria-label="Toggle password visibility"
							>
								{#if showPassword}
									<EyeOff class="h-4 w-4" />
								{:else}
									<Eye class="h-4 w-4" />
								{/if}
							</button>
						</div>
					</div>
					<div class="grid gap-3">
						<Label for="password">Comfirm Pasword</Label>

						<div class="relative">
							<Input id="ComfirmPassword" type={showPassword ? 'text' : 'password'} class="pr-10" />

							<button
								type="button"
								class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onclick={() => (showPassword = !showPassword)}
								aria-label="Toggle password visibility"
							>
								{#if showPassword}
									<EyeOff class="h-4 w-4" />
								{:else}
									<Eye class="h-4 w-4" />
								{/if}
							</button>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<Button>Sign Up</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</main>
