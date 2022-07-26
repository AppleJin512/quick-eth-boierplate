<script lang="ts">
  import { connect, walletAccount, disconnect, web3Provider, userOptions } from 'connect-web3-svelte';

  $: if ($web3Provider) {
    $web3Provider
      .on('connect', () => console.log('=============connnect==========='))
      .on('disconnect', () => console.log('=============disconnnect==========='))
      .on('accountsChanged', () => console.log('===========accountsChanged========='))
      .on('chainChanged', () => console.log('=============chainChanged==========='));
  }
</script>

<main class="max-w-2xl mx-auto pt-28">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8">
    Quick-ETH demo
  </h1>

  <div
    class="mb-10 p-4 not-prose relative bg-slate-100 rounded-xl overflow-hidden dark:bg-slate-800/25"
  >
    <ul class="">
      <li>status: {$walletAccount.status}</li>
      <li>address: {$walletAccount.address}</li>
      <li>chainId: {$walletAccount.chainId}</li>
    </ul>
  </div>

  <div class="divide-y divide-solid">
    <section class="py-8">
      <h1 class="my-6 text-3xl font-extrabold tracking-tight text-slate-900">Connect like web3modal</h1>
      {#if $walletAccount.status === 'connected'}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={disconnect}
        >
          Disconnect
        </buton>
      {:else if ($walletAccount.status = 'disconnected')}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={connect}
        >
          Connect
        </buton>
      {:else}
        <div>loading</div>
      {/if}
    </section>

    <section class="py-8">
      <h1 class="my-6 text-3xl font-extrabold tracking-tight text-slate-900">Direct connect</h1>
      {#if $walletAccount.status === 'connected'}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={disconnect}
        >
          Disconnect
        </buton>
      {:else if ($walletAccount.status = 'disconnected')}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={() => $userOptions?.[0]?.onClick()}
        >
          Connect
        </buton>
      {:else}
        <div>loading</div>
      {/if}
    </section>

    <section class="py-8">
      <h1 class="my-6 text-3xl font-extrabold tracking-tight text-slate-900">Connect like web3modal</h1>
      {#if $walletAccount.status === 'connected'}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={disconnect}
        >
          Disconnect
        </buton>
      {:else if ($walletAccount.status = 'disconnected')}
        <buton
          class="cursor-pointer rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500"
          on:click={() => 1}
        >
          Connect
        </buton>
      {:else}
        <div>loading</div>
      {/if}
    </section>
  </div>
</main>
