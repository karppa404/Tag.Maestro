<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	let { img, link, name }: { img: string; link: string; name: string } = $props();
</script>

<Button
	variant="outline"
	href={link}
	class="relative max-w-3xs min-w-3xs h-fit bg-cover bg-center "
	style={`background-image: url(${img});`}
>
	<span class="relative z-10">{name}</span>
</Button>
