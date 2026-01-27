<script lang="ts">
	import Input from "./ui/input/input.svelte";
	import ThemeToggle from "$lib/components/theme-toggle.svelte"
	import {Button} from "$lib/components/ui/button"
</script>

<nav class="w-full min-h-12 border-b border-1/30 bg-muted inline-flex items-center p-4 gap-2">
    <Input
        type="search" 
        placeholder="search" 
        class="max-w-xs"
    />
    <Button >
        Select Tags
    </Button>
    <Button variant="secondary">
        Edit Tags    
    </Button>
    <ThemeToggle/>
</nav>