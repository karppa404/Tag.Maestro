<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";

  type Option = {
    name: string;
    multiplier: string;
    probability: number;
    color?: string; // tailwind bg class for the progress bar e.g. "bg-blue-500"
  };

  let {
    question = "Which Party will win the U.S House?",
    dateTime = "Jul 1 @ 7:40AM",
    options = [
      { name: "Democratic Party",  multiplier: "1.18x", probability: 85, color: "bg-blue-500" },
      { name: "Republican Party", multiplier: "6.25x", probability: 16, color: "bg-red-500" },
    ] as Option[],
    volume = "$6,829,951",
    marketCount = 2,
    positionSize = "1.2%",
    resolutionClause = "",
    shareCount = 19,
    shareType = "YES",
  } = $props();
</script>

<Card.Root class="max-w-xl w-full">
  <!-- Header -->
  <Card.Header class="pb-2">
    <Card.Title class="text-2xl font-bold leading-snug tracking-tight">
      {question}
    </Card.Title>
    <Card.Description class="text-xs mt-1">{dateTime}</Card.Description>
  </Card.Header>

  <!-- Options -->
  <Card.Content class="space-y-3 pt-0">
    {#each options as opt}
      <div class="flex items-center gap-3">
     

        <!-- Name + bar -->
        <div class="flex-1 min-w-0">
          <span class="text-sm font-medium text-foreground truncate block">{opt.name}</span>
          <div class="mt-1.5 h-1 w-full bg-muted rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-500 {opt.color ?? 'bg-primary'}"
              style="width: {opt.probability}%"
            ></div>
          </div>
        </div>

        <!-- Multiplier -->
        <span class="text-xs text-muted-foreground shrink-0 w-10 text-right">{opt.multiplier}</span>

        <!-- Probability badge -->
        {#if opt.probability >= 50}
          <Badge
            variant="outline"
            class="shrink-0 text-sm font-semibold px-3 py-1 rounded-lg"
          >
            {opt.probability}%
          </Badge>
        {:else}
          <Badge
            variant="secondary"
            class="shrink-0 text-sm font-semibold px-3 py-1 rounded-lg"
          >
            {opt.probability}%
          </Badge>
        {/if}
      </div>
    {/each}

    <Separator class="my-1" />

    <!-- Stats row -->
    <div class="flex items-center justify-between text-xs text-muted-foreground">
      <span>{volume} vol</span>
      <span>{marketCount} markets</span>
    </div>

    <!-- Position info -->
    <div class="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
      <span>
        position Size: <span class="text-foreground font-medium">{positionSize}</span>
      </span>
      <span class="flex items-center gap-1">
        Resolution Clause
        <span
          class="inline-flex items-center justify-center w-4 h-4 rounded-full border border-border text-muted-foreground text-[10px] cursor-help"
          title={resolutionClause}
        >?</span>
      </span>
      <span class="ml-auto text-muted-foreground italic">
        Position: {shareCount} Shares of
        <span class="text-foreground font-semibold not-italic">{shareType}</span>
      </span>
    </div>
  </Card.Content>

  <!-- Footer actions -->
  <Card.Footer class="gap-2 pt-0 flex-wrap">
    <Button variant="outline" class="flex-1 font-semibold text-sm rounded-xl">
      Inspect
    </Button>
    <Button variant="secondary" class="flex-1 font-semibold text-sm rounded-xl">
      Re-evaluate position
    </Button>
    <Button variant="destructive" class="flex-1 font-semibold text-sm rounded-xl">
      Exit position
    </Button>
  </Card.Footer>
</Card.Root>