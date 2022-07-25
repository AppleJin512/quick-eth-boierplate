<script lang="ts">
  // import { w3sProvider } from "../../services/Store";
  // import { initWalletRuntime, networks } from "../../services/WalletService";
  import { ConnectWeb3Modal } from "connect-web3-svelte";
  import ConnectWalletModalContent from "./ConnectWalletModalContent.svelte";

  let network = 'rinkeby';
  let providerOptions = {
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     infuraId: conf.INFURA_ID,
    //     network,
    //   },
    // },
  };

  function handleOnConnect(e) {
    const provider = e.detail.provider
    // $w3sProvider = provider;
    // initWalletRuntime(provider)
  }

 </script>

<div class="custom">
  <ConnectWeb3Modal
    cacheProvider={true}
    network={network}
    disableInjectedProvider={false}
    providerOptions={providerOptions}
    on:connect={handleOnConnect}
    let:hide={hide}
    let:userOptions={userOptions}
  >
    <ConnectWalletModalContent on:close={hide} {userOptions}/>
  </ConnectWeb3Modal>
</div>

<style>
  .custom :global(.connect-web3-modal-container) {
    z-index: 10000;
  }
  .custom :global(.connect-web3-modal-background) {
    background-color: black;
    opacity: 0.5;
  }

  .custom :global(.connect-web3-modal-content) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 700px;
    background-color: white;
    color: black;
    padding: 8px 16px;
    border-radius: 16px;
  }
  @media (max-width: 769px) {
    .custom :global(.connect-web3-modal-content) {
      min-width: unset;
      width: calc(100vw - 36px);
    }
  }
</style>
