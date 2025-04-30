import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Pages
import HomePage from './pages/HomePage';
import WalletPage from './pages/WalletPage';
import HowToPlayPage from './pages/HowToPlayPage';

// Components
import BottomMenu from './components/BottomMenu';

// Cấu hình cho TonConnect

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="/tonconnect-manifest.json"
      actionsConfiguration={{
        // Format twaReturnUrl as required by TonConnect for returning to the app after wallet interaction
        twaReturnUrl: 'https://t.me/TetrisK9_bot/app'
      }}
      // Cấu hình testnet
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
