<script lang="ts">
  const title = "Webstone Technologies - Education, Documentation, Onboarding";
  const description = "Courses, articles & books to help you improve your web development skills.";
  const imageUrl = "https://www.webstonehq.com/images/open-graph.jpg";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}">

  <meta property="og:url" content="https://www.webstonehq.com">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="{imageUrl}">

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="www.webstonehq.com">
  <meta property="twitter:url" content="https://www.webstonehq.com/">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="{imageUrl}">
</svelte:head>
