<script lang="ts">
	let clazz: string = '';
	export let id: string;

	export { clazz as class };
</script>

<div class="pt-24 w-screen {clazz}" {id}>
	<div class="flex items-center">
		<slot />
	</div>
	<slot name="downArrow" />
</div>

