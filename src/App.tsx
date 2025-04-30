import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Pages
import HomePage from './pages/HomePage';
import WalletPage from './pages/WalletPage';
import HowToPlayPage from './pages/HowToPlayPage';

// Components
import BottomMenu from './components/BottomMenu';

// Cấu hình cho TonConnect
import { tonConnectOptions } from './utils/tonConnectConfig';

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl={tonConnectOptions.manifestUrl}
      actionsConfiguration={{
        // Format twaReturnUrl as required by TonConnect for returning to the app after wallet interaction
        twaReturnUrl: 'https://t.me/TetrisK9_bot/app'
      }}
      // Sử dụng danh sách ví từ tonConnectOptions
      walletsListConfiguration={tonConnectOptions.walletsListConfiguration}
    >
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
