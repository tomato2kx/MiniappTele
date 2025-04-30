import { CHAIN } from '@tonconnect/ui';
import { UIWallet } from '@tonconnect/ui-react';

// Cấu hình TonConnect với testnet
export const tonConnectOptions = {
  manifestUrl: 'https://raw.githubusercontent.com/tomato2kx/MiniappTele/main/public/tonconnect-manifest.json',
  // Chỉ định rõ ràng rằng đây là testnet
  connectorParameters: {
    network: CHAIN.TESTNET
  },
  walletsListConfiguration: {
    includeWallets: [
      // Define wallets as UIWallet type
      // Sử dụng AppWallet để đảm bảo kiểu dữ liệu chính xác
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
      } as UIWallet,
      // Tonkeeper Extension cho desktop
      {
        name: 'Tonkeeper Extension',
        appName: 'tonkeeperExtension',
        jsBridgeKey: 'tonkeeper',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://tonkeeper.com',
        imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
        aboutUrl: 'https://chrome.google.com/webstore/detail/tonkeeper/nphplpgoakhhjchkkhmiggakijnkhfnd',
        platforms: ['chrome', 'firefox', 'safari']
      } as UIWallet,
      // TON Wallet cho desktop
      {
        name: 'TON Wallet',
        appName: 'ton_wallet',
        jsBridgeKey: 'tonwallet',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://wallet.ton.org',
        imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
        aboutUrl: 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
        platforms: ['chrome', 'firefox']
      } as UIWallet,
      // Thêm nút Browser Extension
      {
        name: 'Browser Extension',
        appName: 'browser_extension',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://ton.org/wallets',
        imageUrl: 'https://raw.githubusercontent.com/ton-connect/demo-dapp-with-wallet/main/public/browser_extension.svg',
        aboutUrl: 'https://github.com/ton-connect/sdk',
        platforms: ['chrome', 'firefox', 'safari']
      } as UIWallet,
      // Thêm nút Desktop
      {
        name: 'Desktop',
        appName: 'desktop',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://ton.org/wallets',
        imageUrl: 'https://raw.githubusercontent.com/ton-connect/demo-dapp-with-wallet/main/public/desktop.svg',
        aboutUrl: 'https://ton.org/wallets',
        platforms: ['macos', 'windows', 'linux']
      } as UIWallet,
      // OpenMask cho desktop
      {
        name: 'OpenMask',
        appName: 'openmask',
        jsBridgeKey: 'openmask',
        bridgeUrl: 'https://bridge.tonapi.io/bridge',
        universalLink: 'https://www.openmask.app/',
        imageUrl: 'https://openmask.app/assets/logo.png',
        aboutUrl: 'https://www.openmask.app/',
        platforms: ['chrome', 'firefox']
      } as UIWallet
    ]
  }
};