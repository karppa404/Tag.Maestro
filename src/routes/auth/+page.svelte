<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Ico from '$lib/assets/favicon.svg';
</script>

<main class="flex min-h-screen w-full items-center justify-center">
	<div class="flex w-full max-w-7xl items-center justify-between px-8">
		<!-- Logo (left) -->
		<img src={Ico} alt="ico" class="hidden size-98 md:block" />

		<!-- Auth (right) -->
		<div class="flex w-full max-w-md flex-col gap-6">
			<Tabs.Root value="Sign-in">
				<Tabs.List>
					<Tabs.Trigger value="Sign-in">Sign-in</Tabs.Trigger>
					<Tabs.Trigger value="Sign-up">Sign-up</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="Sign-in">
					<Card.Root>
						<Card.Header>
							<Card.Title>Sign in</Card.Title>
							<Card.Description>Authenticate into your Karppa account</Card.Description>
						</Card.Header>

						<Card.Content class="grid gap-6">
							<div class="grid gap-3">
								<Label for="tabs-demo-name">Username</Label>
								<Input id="tabs-demo-name" value="Pedro Duarte" />
							</div>
							<div class="grid gap-3">
								<Label for="Password">Password</Label>
								<Input id="Password"  />
							</div>
						</Card.Content>

						<Card.Footer>
							<Button>Save changes</Button>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>

				<Tabs.Content value="Sign-up">
					<Card.Root>
						<Card.Header>
							<Card.Title>Sign up</Card.Title>
							<Card.Description>
								Make changes to your account here. Click save when you're done.
							</Card.Description>
						</Card.Header>

						<Card.Content class="grid gap-6">
						<div class="grid gap-3">
							<Label for="username">Username</Label>
							<Input id="username" value="Pedro Duarte" />
						</div>
						<div class="grid gap-3">
							<Label for="password">Password</Label>
							<Input id="password"  />
						</div>
						<div class="grid gap-3">
							<Label for="comfirm-password">comfirm password</Label>
							<Input id="comfirm-password"  />
						</div>

						</Card.Content>

						<Card.Footer>
							<Button>Save changes</Button>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</div>
</main>
