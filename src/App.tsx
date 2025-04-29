import { useState } from 'react';

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('0QBAK69jnuoS5W5ai9R5rJGWBFSzmdp-9pgWOqcR6Okz0D3s');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const connectToTON = async () => {
    try {
      if (!walletAddress.trim()) {
        setError('Please enter a wallet address');
        return;
      }
      
      setError('');
      setIsConnected(true);
      setIsLoading(true);

      // Sử dụng TON Center API thay vì TON SDK để tránh lỗi Buffer
      const apiUrl = `https://testnet.toncenter.com/api/v2/getAddressBalance?address=${walletAddress}`;

      // Gọi API để lấy số dư ví
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.ok) {
        // Chuyển đổi từ nanoTON sang TON (1 TON = 10^9 nanoTON)
        const tonBalance = Number(data.result) / 10 ** 9;
        setBalance(tonBalance);
        console.log('TON balance:', tonBalance);
      } else {
        throw new Error('Failed to fetch balance');
      }

    } catch (error) {
      console.error('Error connecting to TON:', error);
      setError('Connection failed. See console for details.');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-center p-4">
      <div className="max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Telegram Mini App 🚀
        </h1>

        <p className="text-gray-600 text-center mb-6">
          This app is integrated with the Telegram Mini App SDK and TON blockchain.
        </p>

        <div className="mb-4">
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 mb-1 text-left">
            TON Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={handleAddressChange}
            placeholder="Enter TON wallet address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={connectToTON}
            disabled={isLoading}
            className={`${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-xl transition font-semibold shadow-md flex items-center justify-center`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : isConnected ? 'Check Balance' : 'Connect to TON'}
          </button>
        </div>

        {balance !== null && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-blue-100 text-center">
            <p className="text-lg text-gray-700">
              Balance: {balance.toFixed(6)} TON
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-100 text-center">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
