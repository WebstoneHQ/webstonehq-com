<script lang="ts">
	export let scrollToSection: string = "";

	const smoothScroll = () => document.getElementById(`${scrollToSection}Section`).scrollIntoView({behavior: "smooth", block:"start", inline:"nearest"});
</script>

<div class="flex justify-center">
	<svg
		class="mt-24 mfx-auto motion-safe:animate-bounce w-12 h-12 text-pink-500 cursor-pointer"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
		on:click={smoothScroll}
	>
		<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
	</svg>
</div>
