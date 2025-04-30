import { CHAIN } from '@tonconnect/ui';

// Cấu hình TonConnect với testnet
export const tonConnectOptions = {
  manifestUrl: 'https://raw.githubusercontent.com/tomato2kx/MiniappTele/main/public/tonconnect-manifest.json',
  // Chỉ định rõ ràng rằng đây là testnet
  connectorParameters: {
    network: CHAIN.TESTNET
  },
  walletsListConfiguration: {
    includeWallets: [
      // Tonkeeper cho mobile và desktop
      {
        name: 'Tonkeeper',
        appName: 'tonkeeper',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://app.tonkeeper.com/ton-connect',
        deepLink: 'tonkeeper://',
        imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
        aboutUrl: 'https://tonkeeper.com',
        platforms: ['ios', 'android', 'chrome', 'firefox', 'safari']
      },
      // Tonkeeper Extension cho desktop
      {
        name: 'Tonkeeper Extension',
        appName: 'tonkeeperExtension',
        jsBridgeKey: 'tonkeeper',
        imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
        aboutUrl: 'https://chrome.google.com/webstore/detail/tonkeeper/nphplpgoakhhjchkkhmiggakijnkhfnd',
        platforms: ['chrome', 'firefox', 'safari']
      },
      // TON Wallet cho desktop
      {
        name: 'TON Wallet',
        appName: 'ton_wallet',
        jsBridgeKey: 'tonwallet',
        imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
        aboutUrl: 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
        platforms: ['chrome', 'firefox']
      },
      // Thêm nút Browser Extension
      {
        name: 'Browser Extension',
        appName: 'browser_extension',
        imageUrl: 'https://raw.githubusercontent.com/ton-connect/demo-dapp-with-wallet/main/public/browser_extension.svg',
        aboutUrl: 'https://github.com/ton-connect/sdk',
        platforms: ['chrome', 'firefox', 'safari']
      }
    ]
  }
};