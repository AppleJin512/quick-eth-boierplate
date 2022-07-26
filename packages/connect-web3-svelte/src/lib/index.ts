import { isMobile, removeLocalCachedProvider } from 'connect-web3-core';
import ConnectWeb3Modal from './ConnectWeb3Modal.svelte';
import { connect, disconnect, walletAccount, web3Provider, userOptions } from './store';

export {
  ConnectWeb3Modal,
  connect,
  disconnect,
  walletAccount,
  isMobile,
  removeLocalCachedProvider,
  web3Provider,
  userOptions,
};
