import * as connectors from './connectors';
import * as injected from './injected';
import * as providers from './providers';

/**
 * for es6 module, when using Object.keys the order is not the same as exported
 */
const orderedConnectorList = [
  'injected',
  'walletconnect',
  'boltx',
  'portis',
  'torus',
  'fortmatic',
  'venly',
  'authereum',
  'burnerconnect',
  'mewconnect',
  'dcentwallet',
  'bitski',
  'frame',
  'binancechainwallet',
  'coinbasewallet',
  'walletlink',
  'sequence',
  'clvwallet',
  'opera',
  'bitkeep',
  'starzwallet',
  'web3auth'
];
export { connectors, orderedConnectorList, injected, providers };
