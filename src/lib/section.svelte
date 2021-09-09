<script lang="ts">
  let clazz: string = "";
  export let id;

  export { clazz as class};
</script>

<div class="pt-24 w-screen md:h-screen {clazz}" {id}>
  <div class="flex items-center">
    <slot />
  </div>
  <slot name="downArrow" />
</div>