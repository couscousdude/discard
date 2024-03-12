<script lang="ts">
  import { page } from '$app/stores'
  import { onMount, type ComponentType } from 'svelte'
  import Error404 from '$lib/components/Errors/Error404.svelte'
  import Generic from '$lib/components/Errors/Generic.svelte'

  let { status, error } = $page

  let errorComponent: ComponentType

  switch (status) {
    case 404:
      errorComponent = Error404
      break
    default:
      errorComponent = Generic
      break
  }
</script>

<main>
  {#if errorComponent}
    <svelte:component this={errorComponent} {error} />
  {/if}
</main>
