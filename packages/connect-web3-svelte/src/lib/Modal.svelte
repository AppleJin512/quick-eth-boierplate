<script lang="ts">
  import { fade } from 'svelte/transition';

  export let open = false;
</script>

{#if open}
  <div class="connect-web3-modal-container" transition:fade={{ duration: 200 }}>
    <div class="connect-web3-modal-background" on:click={() => (open = false)} />
    <div class="connect-web3-modal-content">
      <slot />
    </div>
  </div>
{/if}

<style>
  .connect-web3-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }
  .connect-web3-modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
