<script lang="ts">
  import { connect } from 'connect-web3-svelte';
</script>

<main class="max-w-2xl mx-auto pt-28">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8">
    Quick-ETH demo
  </h1>

  <buton
    class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
    on:click={connect}
  >
    Connect
  </buton>
</main>
