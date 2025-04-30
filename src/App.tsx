import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Pages
import HomePage from './pages/HomePage';
import WalletPage from './pages/WalletPage';
import HowToPlayPage from './pages/HowToPlayPage';

// Components
import BottomMenu from './components/BottomMenu';

// Manifest for TonConnect
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

// Note: In version 2.1.0 of @tonconnect/ui-react, network configuration is handled differently

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        // Format twaReturnUrl as required by TonConnect for returning to the app after wallet interaction
        twaReturnUrl: 'https://t.me/app/TetrisK9_bot'
      }}
      // Configure to use testnet
      walletsListConfiguration={{
        // The testnet configuration is handled through the wallet configuration
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
      }}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/how-to-play" element={<HowToPlayPage />} />
          </Routes>
          <BottomMenu />
        </div>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
