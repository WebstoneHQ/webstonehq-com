<script lang="ts">
  let clazz: string = "";

  export { clazz as class};
</script>

<div class="pt-24 w-screen md:h-screen {clazz}">
  <div class="flex items-center">
    <slot />
  </div>
  <slot name="downArrow" />
</div>