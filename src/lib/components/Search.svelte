<script lang="ts">
  import SearchIcon from './icon/SearchIcon.svelte'
</script>

<div class="relative  flex w-full items-baseline">
  <div class="mr-2 text-pastelPurple mt-auto">
    <SearchIcon />
  </div>
  <input
    type="text"
    name="search"
    placeholder="Search by keyword"
    class=" w-72 border-b border-dashed border-b-pastelPurple bg-transparent font-sans text-xl text-black outline-none focus:border-b-lavenderIndigo focus:border-solid"
  />
  <button class="font-sans text-xl font-black text-pastelPurple">Search</button>
</div>
