<script lang="ts">
  import { onMount } from 'svelte'

  export let once = false
  export let threshold = 0.2
  export let offset = '0px'

  let visible = false
  let intersecting = false

  let component: HTMLDivElement

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        intersecting = entries[0].isIntersecting
        if (intersecting) {
          visible = true
          if (once) {
            observer.unobserve(entries[0].target)
          }
        } else {
          visible = false
        }
      },
      {
        threshold,
        rootMargin: offset
      }
    )

    observer.observe(component)

    return () => {
      observer.disconnect()
    }
  })
</script>

<div bind:this={component}>
  <slot {visible} {intersecting} />
</div>
