<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let userOptions: any[] = [];

  </script>

  <div class="flex justify-between relative">
    <h4
      class="text-32px font-bold text-title mt-15 phone:mt-10 mx-auto phone:text-center "
    >
      Connect your wallet
    </h4>
    <button
      class="cursor-pointer absolute right-4 top-5 phone:right-0 phone:top-3  hover:bg-black-E1 rounded-full w-8 h-8"
    >
      <img
        src={"/images/icon-close-modal.svg"}
        alt="close"
        on:click={() => dispatch('close')}
        class="mx-auto"
      />
    </button>
  </div>
  <div class="mt-8 mb-15 phone:mb-10">
    {#each userOptions as provider}
      <div
        class="hover:bg-black-F1 py-3 px-4 cursor-pointer w-full text-center flex border justify-between items-center border-black-E0 bg-black-F7 rounded-full max-w-280 mx-auto mb-4"
        on:click={() => provider.onClick()}
      >
        <img src={provider.logo} alt={provider.name} class="w-6 h-6" />
        <div class="mx-auto">
          {provider.name}
        </div>
      </div>
    {/each}
  </div>
