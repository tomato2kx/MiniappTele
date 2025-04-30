// Cấu hình cho TonConnect

// Cấu hình TonConnect với testnet
export const tonConnectOptions = {
  manifestUrl: '/tonconnect-manifest.json',
  // Chỉ định rõ ràng rằng đây là testnet
  walletConnectParameters: {
    testnet: true
  },
  walletsListConfiguration: {
    includeWallets: [{
      name: 'Tonkeeper',
      appName: 'tonkeeper',
      bridgeUrl: 'https://bridge.tonapi.io/bridge',
      universalLink: 'https://app.tonkeeper.com/ton-connect',
      deepLink: 'tonkeeper://',
      imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
      aboutUrl: 'https://tonkeeper.com',
      platforms: ['ios', 'android', 'chrome']
    }]
  }
};
