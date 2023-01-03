<script lang="ts">
  import { page } from '$app/stores'
  import Close from '$lib/components/icon/Close.svelte'
  import Hamburger from '$lib/components/icon/Hamburger.svelte'

  let isNavShowing = false
</script>

<!-- mobile nav control -->
<button
  class=" fixed z-navBarToggle right-6 top-6 md:hidden"
  class:text-goldenFizz={isNavShowing}
  class:text-daisyBush={!isNavShowing}
  on:click={() => {
    isNavShowing = !isNavShowing
  }}
>
  {#if isNavShowing}
    <Close width={32} height={32} />
  {:else}
    <Hamburger width={32} height={32} />
  {/if}
</button>

<svelte:head>
  {#if isNavShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}
</svelte:head>

<header
  class=" fixed z-navbar transition-transform h-screen md:h-full w-full md:relative -translate-x-full md:translate-x-0 md:col-span-3 bg-daisyBush text-center"
  class:translate-x-0={isNavShowing}
>
  <div class=" mt-10 mb-10 md:mb-24">
    <a href="/invoices"><img src="/images/logo.svg" alt="Billz" class=" mx-auto" /></a>
  </div>

  <nav>
    <ul class=" list-none text-2xl font-bold">
      <li><a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a></li>
      <li><a href="/clients" class:active={$page.url.pathname === '/clients'}>Clients</a></li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li><a href="#">Settings</a></li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <li><a href="#">Logout</a></li>
    </ul>
  </nav>
</header>

<style lang="postcss">
  nav ul li {
    @apply mb-6;
  }

  nav ul li a {
    @apply font-bold text-white hover:text-goldenFizz;
  }

  nav ul li a.active {
    @apply px-8 text-robinEggBlue transition-[padding];
    background: url('/images/active-nav--left.svg') left top no-repeat,
      url('/images/active-nav--right.svg') right top no-repeat;
  }

  nav ul li a.active:hover {
    @apply px-9;
  }
</style>
