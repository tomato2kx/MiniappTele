import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const WalletPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen p-4 pt-16 pb-20">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Kết nối ví TON
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Kết nối ví TON của bạn để tham gia xổ số và nhận thưởng.
        </p>
        
        <div className="flex justify-center mb-6">
          <TonConnectButton />
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">Lưu ý:</span> Kết nối ví TON an toàn và bảo mật. 
            Chúng tôi không lưu trữ khóa riêng tư của bạn và bạn luôn kiểm soát hoàn toàn tài sản của mình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
