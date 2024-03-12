<script>
  import VisibilityObserver from '$lib/components/utils/VisibilityObserver.svelte'
  import { BookOpenSolid, BrainOutline, TerminalSolid } from 'flowbite-svelte-icons'
  import { fade } from 'svelte/transition'
</script>

<VisibilityObserver let:visible>
  {#if visible}
    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div in:fade={{ duration: 600 }}>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <BrainOutline class="text-primary-300" />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Powered by AI</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Protect your organization, devices and stay compliant with our structured workflows and
          custom permissions made for you.
        </p>
      </div>
      <div in:fade={{ duration: 600, delay: 200 }}>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <TerminalSolid class="text-primary-300" />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Free and open source, forever</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Licensed under the <a
            class="link-default"
            href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPL v3</a
          >.
        </p>
      </div>
      <div in:fade={{ duration: 600, delay: 400 }}>
        <div
          class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
        >
          <BookOpenSolid class="text-primary-300" />
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Minimal</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Makes flashcards powered by AI. Nothing more, nothing less. We'll never show you a paywall
          popup or ad.
        </p>
      </div>
    </div>
  {:else}
    <div class="h-8" />
  {/if}
</VisibilityObserver>
