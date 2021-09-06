<script>
  import Dot from "$lib/dot.svelte";
  import logo from "$lib/logo.svg";
</script>

<div class="flex items-center h-screen w-screen bg-cover bg-no-repeat bg-center" style="background-image: url(/images/bg.jpg)">
  <div class="container mx-auto px-12">
    <img src={logo} alt="Webstone Technologies logo" class="h-12 w-12" />
    <h1 class="mt-24 font-semibold text-white text-3xl tracking-wider md:text-7xl">Webstone<br />Technologies<Dot /></h1>
    <p class="mt-8 text-gray-400 tracking-wider md:text-2xl">Education<Dot /> Documentation<Dot /> Onboarding<Dot /></p>
  </div>
</div>