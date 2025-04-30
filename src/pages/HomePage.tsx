import React, { useEffect, useState } from 'react';
import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const wallet = useTonWallet();
  const userAddress = useTonAddress();
  const navigate = useNavigate();
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Hàm để lấy số dư TON từ API testnet
  const fetchTonBalance = async (address: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://testnet.toncenter.com/api/v2/getAddressBalance?address=${address}`);
      const data = await response.json();
      if (data.ok) {
        // Chuyển đổi từ nanoTON sang TON (1 TON = 10^9 nanoTON)
        const tonBalance = (parseInt(data.result) / 1000000000).toFixed(2);
        setBalance(tonBalance);
      }
    } catch (error) {
      console.error('Lỗi khi lấy số dư TON:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (wallet && userAddress) {
      fetchTonBalance(userAddress);
    }
  }, [wallet, userAddress]);

  return (
    <div className="bg-gray-100 flex flex-col justify-start items-center min-h-screen p-4 pt-16 pb-20">
      {wallet ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Thông tin ví TON</h2>
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Địa chỉ ví:</p>
              <p className="text-sm font-medium text-gray-800 truncate max-w-[200px]">{userAddress}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Số dư:</p>
              <p className="text-2xl font-bold text-blue-600">
                {isLoading ? (
                  <span className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  `${balance} TON`
                )}
              </p>
              <p className="text-xs text-gray-500">Testnet</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Chưa kết nối ví</h2>
          <p className="text-center text-gray-600 mb-4">Kết nối ví TON để xem số dư và tham gia xổ số</p>
          <button 
            onClick={() => navigate('/wallet')} 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Kết nối ví ngay
          </button>
        </div>
      )}

      <table className="w-full max-w-md border border-gray-300 bg-white shadow-md">
        <thead>
          <tr className="bg-gray-700">
            <th colSpan={2} className="text-white text-center font-bold text-lg py-3">Xổ số Miền Bắc Thứ Ba 29-04-2025</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Đặc biệt</td>
            <td className="text-red-600 font-bold text-lg text-center py-3">77558</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải nhất</td>
            <td className="text-center py-3">76621</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải nhì</td>
            <td className="text-center py-3 flex justify-center gap-20">
              <span>05745</span>
              <span>68001</span>
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải ba</td>
            <td className="py-3">
              <div className="flex justify-center gap-20 mb-1">
                <span>49567</span>
                <span>17498</span>
                <span>44294</span>
              </div>
              <div className="flex justify-center gap-20">
                <span>60415</span>
                <span>63586</span>
                <span>05602</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải tư</td>
            <td className="text-center py-3 flex justify-center gap-16">
              <span>3314</span>
              <span>1724</span>
              <span>1857</span>
              <span>5460</span>
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải năm</td>
            <td className="py-3">
              <div className="flex justify-center gap-16 mb-1">
                <span>1908</span>
                <span>9456</span>
                <span>4419</span>
              </div>
              <div className="flex justify-center gap-16">
                <span>3442</span>
                <span>0926</span>
                <span>7348</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải sáu</td>
            <td className="text-center py-3 flex justify-center gap-20">
              <span>098</span>
              <span>906</span>
              <span>352</span>
            </td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-3 border-r border-gray-300">Giải bảy</td>
            <td className="text-center py-3 flex justify-center gap-20">
              <span>21</span>
              <span>02</span>
              <span>88</span>
              <span>57</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
