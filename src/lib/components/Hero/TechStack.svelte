<script lang="ts">
  import Anthropic from '$lib/assets/logos/Anthropic.svelte'
  import SvelteWordmark from '$lib/assets/logos/SvelteWordmark.svelte'
  import Vercel from '$lib/assets/logos/Vercel.svelte'
</script>

<div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
  <span class="font-semibold text-gray-400 uppercase">POWERED BY</span>
  <div
    class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between h-10"
  >
    <a
      href="https://svelte.dev"
      target="_blank"
      class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 hover:brightness-75"
    >
      <SvelteWordmark animateOnMount />
    </a>
    <a
      href="https://www.anthropic.com/"
      target="_blank"
      class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 hover:brightness-75"
    >
      <Anthropic animateOnMount />
    </a>
    <a
      href="https://vercel.com"
      target="_blank"
      class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 hover:brightness-75"
    >
      <Vercel animateOnMount />
    </a>
  </div>
</div>
