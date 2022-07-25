<script context="module">
  import { writable } from "svelte/store";

  const opened = writable(true);

  export function connect() {
    opened.set(true);
  }
</script>

<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import Modal from "./Modal.svelte";
  import { ProviderController, CONNECT_EVENT, ERROR_EVENT, IProviderUserOptions, IProviderOptions } from "../core";

  export let cacheProvider = false; // optional
  export let network = ''; // optional
  export let disableInjectedProvider = false; // optional
  export let providerOptions: IProviderOptions; // required

  const dispatch = createEventDispatcher();

  let providerController: ProviderController;
  let userOptions: IProviderUserOptions[] = [];

  function hide() {
    $opened = false;
  }

  onMount(async () => {
    providerController = new ProviderController({
      disableInjectedProvider,
      cacheProvider,
      providerOptions,
      network,
    });

    providerController.on(CONNECT_EVENT, (provider) => {
      dispatch("connect", {provider});
      console.log('connect')
      hide();
    });

    providerController.on(ERROR_EVENT, (error) => {
      console.log('error')
      dispatch("error", {error});
      hide();
    });

    userOptions = providerController.getUserOptions();

    if (cacheProvider) {
      providerController.connectToCachedProvider()
    }
  });
</script>

<Modal bind:open={$opened}>
  <slot hide={hide} userOptions={userOptions}></slot>
</Modal>
