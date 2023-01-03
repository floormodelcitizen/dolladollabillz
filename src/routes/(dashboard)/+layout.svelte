<script lang="ts">
  // import type { LayoutData } from './$types'

  import Navbar from '$lib/components/Navbar.svelte'

  // export let data: LayoutData
</script>

<div class=" grid min-h-screen grid-cols-12 bg-whisper md:gap-x-16">
  <Navbar />
  <main class="col-span-12 px-4 pt-4 md:col-span-8 md:pt-10">
    <slot />
  </main>
</div>
