<script>
  import { InfoCircleSolid, ArrowRightAltSolid, ArrowRightSolid } from 'flowbite-svelte-icons'
  import TechStack from './TechStack.svelte'
  import { Button } from 'flowbite-svelte'
</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
  <a
    href="https://github.com/couscousdude/discard"
    target="_blank"
    class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3"
      >Under construction</span
    >
    <span class="text-sm font-medium"><strong>discard</strong> is under active development!</span>
    <svg
      class="ml-2 w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path></svg
    >
  </a>
  <h1
    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
  >
    Not just another flashcards app.
  </h1>
  <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    <strong>Quizlet</strong> is outdated. <strong>MasteringMicro</strong> is paywalled. Don't pay
    for flashcards. <strong>discard</strong>
    is a <strong>Free and Open Source tool</strong> designed to help you learn anything, blazingly fast.
  </p>
  <div
    class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
  >
    <Button href="#" color="primary">
      <span class="mr-2">Try it</span>
      <ArrowRightSolid />
    </Button>
    <Button href="#" color="alternative">
      <InfoCircleSolid />
      <span class="ml-2">Learn more</span>
    </Button>
  </div>
  <TechStack />
</div>
