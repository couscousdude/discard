<script>
  import { GithubSolid } from 'flowbite-svelte-icons'
</script>

<footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 absolute bottom-0 w-full">
  <div class="mx-auto max-w-screen-xl">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-8"
            alt="Discard Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >discard</span
          >
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://flowbite.com" class="hover:underline">Flowbite</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://github.com/couscousdude/discard" class="hover:underline">Github</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="/about/privacy" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/about/terms" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="https://github.com/couscousdude" class="hover:underline">Youwen Wu</a>.
        All Rights Reserved.
      </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a
          href="https://github.com/couscousdude/discard"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <GithubSolid />
        </a>
      </div>
    </div>
  </div>
</footer>
