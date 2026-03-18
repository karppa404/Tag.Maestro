<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";

  type Option = {
    name: string;
    multiplier: string;
    probability: number;
    color?: string; // tailwind bg class for the progress bar e.g. "bg-blue-500"
  };

  let {
    question = "Which Party will win the U.S House?",
    marketLink = "https://demo.kalshi.co/markets/kxsurvivor/who-will-win-survivor/kxsurvivor-26dec31",
    dateTime = "Jul 1 @ 7:40AM",
    options = [
      { name: "Democratic Party",  multiplier: "1.18x", probability: 85, color: "bg-blue-500" },
      { name: "Republican Party", multiplier: "6.25x", probability: 16, color: "bg-red-500" },
    ] as Option[],
    volume = "$6,829,951",
    marketCount = 2,
    positionSize = "1.2%",
    resolutionClause = "The winner must be officially announced in the finale or via official channels immediately following. Multiple joint winners each resolve to Yes with split payouts ($1 divided by number of winners). If no winner is declared, all markets resolve to No. Winners who decline the award still count unless acceptance was a condition of victory. Disqualifications or withdrawals before the finale resolve to No. Later title stripping doesn't affect resolution - the original finale announcement governs. Fan favorite or other secondary awards don't count as winning. For couples/teams competitions, being part of the winning unit counts.",
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
        <HoverCard.Root>
          <HoverCard.Trigger
            href={marketLink}
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
          >
              ?
          </HoverCard.Trigger>
          <HoverCard.Content class="w-80">
            <div class="flex justify-between space-x-4">
  
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">@sveltejs</h4>
                <p class="text-sm">Cybernetically enhanced web apps.</p>
                <div class="flex items-center pt-2">
                  <span class="text-muted-foreground text-xs">
                    Joined September 2022
                  </span>
                </div>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
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