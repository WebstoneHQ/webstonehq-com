<script lang="ts">
  let clazz: string = "";

  export let anchor: string = "";
  export { clazz as class};
</script>

<a name="{anchor}"></a>
<div class="pt-24 w-screen bg-black md:h-screen {clazz}">
  <div class="flex items-center">
    <slot />
  </div>
  <slot name="downArrow" />
</div>