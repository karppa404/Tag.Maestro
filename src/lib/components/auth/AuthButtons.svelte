<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import {SiGoogle, SiGithub} from "@icons-pack/svelte-simple-icons"
	import { signInWithGoogle,signInWitGithub } from '$lib/client/auth-client';
</script>

<main class="-mb-4 flex h-full w-full flex-col items-center justify-center gap-2">
	<Button class="inline-flex gap-5 " variant="secondary" onclick={() => signInWitGithub()}>
	<SiGithub size={12}/>
	Sign in with Github
	</Button>
	<Button class="inline-flex gap-5 " variant="secondary" onclick={() => signInWithGoogle()}>
	<SiGoogle size={12}/>
	Sign in with Google
	</Button>
</main>


