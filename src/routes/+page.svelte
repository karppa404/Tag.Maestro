<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable/index.js";
</script>
<main class="min-h-screen max-h-screen w-full">
    <Resizable.PaneGroup
      class="w-full h-full rounded-lg "
      direction="horizontal"
    >
      <Resizable.Pane defaultSize={25}>
        <div class="flex h-full items-center justify-center p-6 w-full ">
          <span class="font-semibold">Header</span>
          Hello
        </div>
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane defaultSize={75}>
        <div class="flex h-full items-center justify-center p-6 w-full ">
          <span class="font-semibold">Content</span>
          What is up guys
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
</main>