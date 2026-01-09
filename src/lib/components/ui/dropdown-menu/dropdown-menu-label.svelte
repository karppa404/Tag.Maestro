<script lang="ts">
<<<<<<<< HEAD:src/lib/components/ui/carousel/carousel-item.svelte
	import type { HTMLAttributes } from "svelte/elements";
	import { getEmblaContext } from "./context.js";
========
>>>>>>>> a9a9c569f62f5bad8871a9553677cee69bffed71:src/lib/components/ui/dropdown-menu/dropdown-menu-label.svelte
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
<<<<<<<< HEAD:src/lib/components/ui/carousel/carousel-item.svelte
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const emblaCtx = getEmblaContext("<Carousel.Item/>");
========
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		inset?: boolean;
	} = $props();
>>>>>>>> a9a9c569f62f5bad8871a9553677cee69bffed71:src/lib/components/ui/dropdown-menu/dropdown-menu-label.svelte
</script>

<div
	bind:this={ref}
<<<<<<<< HEAD:src/lib/components/ui/carousel/carousel-item.svelte
	data-slot="carousel-item"
	role="group"
	aria-roledescription="slide"
	class={cn(
		"min-w-0 shrink-0 grow-0 basis-full",
		emblaCtx.orientation === "horizontal" ? "ps-4" : "pt-4",
		className
	)}
	data-embla-slide=""
========
	data-slot="dropdown-menu-label"
	data-inset={inset}
	class={cn("px-2 py-1.5 text-sm font-semibold data-[inset]:ps-8", className)}
>>>>>>>> a9a9c569f62f5bad8871a9553677cee69bffed71:src/lib/components/ui/dropdown-menu/dropdown-menu-label.svelte
	{...restProps}
>
	{@render children?.()}
</div>
