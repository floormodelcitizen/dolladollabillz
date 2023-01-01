<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte'
  import ThreeDots from '$lib/components/icon/ThreeDots.svelte'
  import View from '$lib/components/icon/View.svelte'

  // import type { PageData } from './$types'

  import Search from '$lib/components/Search.svelte'
  import Tag from '$lib/components/Tag.svelte'

  // export let data: PageData
</script>

<svelte:head>
  <title>Invoices | Billz</title>
</svelte:head>

<div class="mb-16 flex items-center justify-between">
  <!-- search field -->
  <Search />

  <!-- new invoice button -->

  <div>
    <button
      class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sans text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
      >+ Invoice</button
    >
  </div>
</div>

<!-- list of invoices -->
<div>
  <!-- header -->
  <div class="table-header invoice-table text-daisyBush ">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div />
    <div />
  </div>

  <!-- invoices -->
  <div class="invoice-table items-center bg-white py-6 rounded-lg shadow-tableRow">
    <div><Tag label="draft" /></div>
    <div class="text-lg">08/01/2022</div>
    <div class="text-lg">12345</div>
    <div class="text-xl font-bold">Compressed.fm</div>
    <div class="font-mono text-lg font-bold">$504.00</div>
    <div class="text-lg center"><a href="/#" class=" text-pastelPurple hover:text-daisyBush"><View /></a></div>
    <div class="text-lg center">
      <button class=" text-pastelPurple hover:text-daisyBush">
        <ThreeDots />
      </button>
    </div>
  </div>
</div>

<CircledAmount label="Total" amount="$1,144.44" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
