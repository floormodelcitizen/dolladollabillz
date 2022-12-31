<script lang="ts">
  import { formatMe, formatYou } from '$utils/FormatText'
</script>

<h1 class="text-3xl flex font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">button</button>

<div>
  {formatMe('Amy')}
  {formatYou('James')}
</div>
