import { writable } from 'svelte/store';
import { tick } from 'svelte';
import { removeLocalCachedProvider } from 'connect-web3-svelte';


// TODO:
declare let window: any;
const ethers = window.ethers;

interface Account {
  status: 'connecting' | 'connected' | 'disconnected';
  address: string;
  chainId: number;
}
export const walletAccount = writable<Account>({ status: 'disconnected', address: '', chainId: -1 });

/*
 * 1. used to trigger get wallet information: account, currentChainId...
 * 2. used to switch network
 */
export const w3sProvider = writable<any>(null);
export const isManualConnect = writable(false);

export const autoConnectToWalletFinished = writable(false);
export const opened = writable(false);

// TODO:
const defaultProvider = new ethers.providers.InfuraProvider('rinkeby');
let cachedProvider = defaultProvider;

export function getProvider() {
  return cachedProvider;
}

export function connect() {
  opened.set(true);
}

export function disconnect() {
  cachedProvider = defaultProvider;
  w3sProvider.set(null);
  removeLocalCachedProvider();
  walletAccount.set({ status: 'disconnected', address: '', chainId: '' });
}

export async function initWalletRuntime(provider: any) {
  if (!provider) {
    return;
  }

  registerEthListener(provider);

  cachedProvider = new ethers.providers.Web3Provider(provider);

  const [accounts, net] = await Promise.all([
    cachedProvider.listAccounts(),
    cachedProvider.getNetwork()
  ]);
  autoConnectToWalletFinished.set(true);
  if (accounts.length === 0) {
    console.error('no account');
  } else {
    walletAccount.set({ status: 'connected', address: accounts[0], chainId: Number(net.chainId) });
  }
  // wait currentAccount to set and trigger reactive statements
  // to redirect `pages/index.svelte`
  await tick();
  isManualConnect.set(false);
}

function registerEthListener(w3sProvider: any) {
  if (!w3sProvider || !w3sProvider.removeAllListeners || !w3sProvider.on) {
    return;
  }

  w3sProvider.removeAllListeners(['connect', 'disconnect', 'accountsChanged', 'chainChanged']);

  w3sProvider
    .on('connect', () => {
      console.info('Event->connect')
      initWalletRuntime(w3sProvider);
    })
    .on('disconnect', (error: any) => {
      console.info('Event->disconnect')
      console.info(error);
    })
    .on('accountsChanged', (accounts: any) => {
      console.info('Event->accountsChanged')
      if (accounts.length === 0) {
        disconnect()
      } else {
        walletAccount.update((prev) => ({ ...prev, status: 'connected', address: accounts[0] }));
      }
    })
    .on('chainChanged', (chainId: any) => {
      console.info('Event->chainChanged')
      walletAccount.update((prev) => ({ ...prev, status: 'connected', chainId: Number(chainId) }));
      initWalletRuntime(w3sProvider);
    });
}
