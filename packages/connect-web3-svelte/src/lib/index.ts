import { isMobile, removeLocalCachedProvider } from 'connect-web3-core';
import ConnectWeb3Modal from './ConnectWeb3Modal.svelte';
import { connect, disconnect, walletAccount } from './store';

export {
  ConnectWeb3Modal,
  connect,
  disconnect,
  walletAccount,
  isMobile,
  removeLocalCachedProvider
};
