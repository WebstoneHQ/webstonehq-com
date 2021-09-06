<script lang="ts">
  import Dot from "$lib/dot.svelte";
  import DownArrow from "$lib/down-arrow.svelte";
  import OurServicesSection from "$lib/our-services-section.svelte";
  import Section from "$lib/section.svelte";
  import SectionParagraph from "$lib/section-paragraph.svelte";
  import SectionTitle from "$lib/section-title.svelte";
  import logo from "$lib/logo.svg";

  let ourServicesSectionIndex = 0;
</script>

<div class="flex items-center h-screen w-screen bg-cover bg-no-repeat bg-center" style="background-image: url(/images/bg.jpg)">
  <div class="container mx-auto px-12">
    <img src={logo} alt="Webstone Technologies logo" class="h-12 w-12 md:h-20 md:w-20" />
    <h1 class="mt-12 font-semibold text-white text-4xl tracking-wider md:text-8xl">Webstone<br />Technologies<Dot /></h1>
    <SectionParagraph class="mt-8">Education<Dot /> Documentation<Dot /> Onboarding<Dot /></SectionParagraph>
    <DownArrow />
  </div>
</div>

<Section>
  <div class="container mx-auto px-12 md:flex">
    <img src="/images/about-us.jpg" alt="Webstone Technologies logo" class="md:w-1/2" />
    <div class="md:w-1/2 md:ml-12">
      <SectionTitle>About Us</SectionTitle>
      <div class="mt-8 space-y-12">
        <SectionParagraph>We worked at web agencies, startups and multi-national corporations.</SectionParagraph>
        <SectionParagraph>In 2021, we formed Webstone Technologies to use our extensive experience in web development and help others level up and be successful.</SectionParagraph>
        <SectionParagraph>Contact us and learn how we can help you and your team.</SectionParagraph>
      </div>
    </div>
  </div>
  <svelte:fragment slot="downArrow">
    <DownArrow />
  </svelte:fragment>
</Section>

<Section>
  <div class="container mx-auto px-12 md:flex">
    <div class="md:w-1/2">
      <SectionTitle>Our<br />Services</SectionTitle>
      <img src="/images/our-services.jpg" alt="Webstone Technologies logo" class="mt-8" />
    </div>
    <div class="mt-8 space-y-6 text-gray-400 tracking-wider md:w-1/2 md:mt-0 md:ml-12 md:text-2xl">
      <OurServicesSection sectionIndex={++ourServicesSectionIndex} title="Education">
        <SectionParagraph>We provide courses, articles & books to help you improve your skills.</SectionParagraph>
      </OurServicesSection>
      <OurServicesSection sectionIndex={++ourServicesSectionIndex} title="Documentation">
        <SectionParagraph>We review & improve your existing docs or help you write them from scratch.</SectionParagraph>
      </OurServicesSection>
      <OurServicesSection sectionIndex={++ourServicesSectionIndex} title="Onboarding">
        <SectionParagraph>We evaluate your product's onboarding experience and help you convert more first-time users to champions.</SectionParagraph>
      </OurServicesSection>
    </div>
  </div>
  <svelte:fragment slot="downArrow">
    <DownArrow />
  </svelte:fragment>
</Section>

<Section>
  <div class="container mx-auto px-12">
    <SectionTitle>Let's work together</SectionTitle>
    <div class="mt-8 md:flex md:items-center">
      <img src="/images/contact-us.jpg" alt="Webstone Technologies logo" class="md:w-2/3" />
      <div class="mt-12 md:mt-0 md:ml-12">
        <h3 class="font-bold text-2xl text-white md:text-4xl">Twitter</h3>
        <p class="mt-4 text-pink-500 text-xl tracking-wider md:text-2xl">
          <a href="https://twitter.com/webstonehq" target="_blank">@webstonehq</a>
        </p>
        <h3 class="mt-8 font-bold text-2xl text-white md:text-4xl">Email</h3>
        <p class="mt-4 text-pink-500 text-xl tracking-wider md:text-2xl">
          <a href="mailto:hi@webstonehq.com" target="_blank">hi@webstonehq.com</a>
        </p>
      </div>
    </div>
  </div>
</Section>

<footer class="pt-16 pb-8 text-white">
  <p class="text-sm text-center">Copyright &copy; 2021 Webstone Technologies Inc.</p>
</footer>