const infuraId = process.env.REACT_APP_INFURA_ID;

export const providerOptions = {
  walletconnect: {
    /*
     * WalletConnectProvider is injected in html script tag
     * There are some issues when adding it as deps with vite
     * So here we use html script tag to add it
     */
    package: (window as any).WalletConnectProvider.default,
    options: {
      infuraId
    }
  }
};
