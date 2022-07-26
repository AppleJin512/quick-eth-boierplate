<script lang="ts">
  import { opened, w3sProvider, initWalletRuntime, isManualConnect } from './store';
  import { createEventDispatcher, onMount } from 'svelte';
  import Modal from './Modal.svelte';
  import { ProviderController, CONNECT_EVENT, ERROR_EVENT } from 'connect-web3-core';
  import type { IProviderUserOptions, IProviderOptions } from 'connect-web3-core';

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
      network
    });

    providerController.on(CONNECT_EVENT, (provider) => {
      dispatch('connect', { provider });
      $w3sProvider = provider;
      initWalletRuntime(provider);
      hide();
    });

    providerController.on(ERROR_EVENT, (error) => {
      dispatch('error', { error });
      $isManualConnect = false;
      hide();
    });

    userOptions = providerController.getUserOptions();

    if (cacheProvider) {
      providerController.connectToCachedProvider();
    }
  });
</script>

<Modal bind:open={$opened}>
  <slot {hide} {userOptions} />
</Modal>
