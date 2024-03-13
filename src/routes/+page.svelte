<script lang="ts">
  import Features from '$lib/components/Marketing/Features/Features.svelte'
  import Hero from '../lib/components/Marketing/Hero.svelte'
</script>

<svelte:head>
  <title>discard</title>
  <meta name="description" content="a new way to flashcard." />
</svelte:head>

<main>
  <section>
    <Hero />
  </section>
  <section>
    <Features />
  </section>
</main>
