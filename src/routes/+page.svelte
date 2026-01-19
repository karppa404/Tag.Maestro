<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<main class="h-full w-full flex flex-col">
  <Resizable.PaneGroup
    direction="horizontal"
    class="flex-1 w-full rounded-lg"
  >
    <Resizable.Pane defaultSize={75}>
      <div class="h-full w-full flex items-center justify-center p-6">
        <span class="font-semibold">Header</span>
        Hello
      </div>
    </Resizable.Pane>

    <Resizable.Handle withHandle/>

    <Resizable.Pane defaultSize={25} minSize={15} maxSize={25}>
      <div class="h-full w-full flex items-center justify-center p-6">
        <span class="font-semibold">Content</span>
        What is up guys
      </div>
    </Resizable.Pane>
  </Resizable.PaneGroup>
</main>
