<script lang="ts">
  import '$lib/app.css'
  import '@fontsource/inter/latin.css'
  import '@fontsource/fira-code/latin.css'
  import '@fontsource/ibm-plex-serif/latin.css'
  import Header from '$lib/components/Nav/Header.svelte'
  import Footer from '$lib/components/Nav/Footer.svelte'
</script>

<div class="min-h-screen relative">
  <Header />
  <div class="h-20" />
  <slot />
  <div class="h-72" />
  <Footer />
</div>
