<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Ico from '$lib/assets/favicon.svg';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { data, form }: { data: any; form: ActionData } = $props();
</script>

<main class="flex flex-col h-full w-full items-center justify-center">
	<div class="flex w-full max-w-7xl items-center justify-between px-8">
		<!-- Logo (left) -->
		<img src={Ico} alt="ico" class="hidden size-98 md:block" />
		<hr class="h-full w-full rotate-90 bg-accent" />
		<!-- Auth (right) -->
		<div class="flex w-full max-w-md flex-col gap-6">
			<Tabs.Root value="Sign-in">
				<Tabs.List class="grid grid-cols-2 gap-2" >
					<Tabs.Trigger value="Sign-in" >Sign-in</Tabs.Trigger>
					<Tabs.Trigger value="Sign-up" >Sign-up</Tabs.Trigger>
				</Tabs.List>

				<!-- Sign In Tab -->
				<Tabs.Content value="Sign-in">
					<form method="POST" action="?/signin" use:enhance>
						<Card.Root>
							<Card.Header>
								<Card.Title>Sign in</Card.Title>
								<Card.Description>Authenticate into your Karppa account</Card.Description>
							</Card.Header>
							<Card.Content class="grid gap-6">
								{#if form?.error}
									<div class="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
										{form.error}
									</div>
								{/if}
								<div class="grid gap-3">
									<Label for="signin-username">Username</Label>
									<Input id="signin-username" name="username" type="text" required />
								</div>
								<div class="grid gap-3">
									<Label for="signin-password">Password</Label>
									<Input id="signin-password" name="password" type="password" required />
								</div>
							</Card.Content>
							<Card.Footer>
								<Button type="submit" class="w-full">Sign in</Button>
							</Card.Footer>
						</Card.Root>
					</form>
				</Tabs.Content>

				<!-- Sign Up Tab -->
				<Tabs.Content value="Sign-up">
					<form method="POST" action="?/signup" use:enhance>
						<Card.Root>
							<Card.Header>
								<Card.Title>Sign up</Card.Title>
								<Card.Description>Create a new account</Card.Description>
							</Card.Header>
							<Card.Content class="grid gap-6">
								{#if form?.error}
									<div class="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
										{form.error}
									</div>
								{/if}
								<div class="grid gap-3">
									<Label for="signup-name">Display Name</Label>
									<Input id="signup-name" name="name" type="text" required />
								</div>
								<div class="grid gap-3">
									<Label for="signup-username">Username</Label>
									<Input id="signup-username" name="username" type="text" required />
								</div>
								<div class="grid gap-3">
									<Label for="signup-password">Password</Label>
									<Input id="signup-password" name="password" type="password" required />
								</div>
								<div class="grid gap-3">
									<Label for="signup-confirm-password">Confirm Password</Label>
									<Input id="signup-confirm-password" name="confirm-password" type="password" required />
								</div>
							</Card.Content>
							<Card.Footer>
								<Button type="submit" class="w-full">Create account</Button>
							</Card.Footer>
						</Card.Root>
					</form>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</div>
</main>
