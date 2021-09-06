<script lang="ts">
	export let sectionIndex: number;
	export let title: string;
</script>

<div class="pt-6 flex border-t border-gray-400">
	<span class="font-bold text-5xl text-pink-500">0{sectionIndex}</span>
	<div class="ml-3">
		<h3 class="font-bold text-white text-2xl">{title}</h3>
		<p class="mt-4"><slot /></p>
	</div>
</div>
