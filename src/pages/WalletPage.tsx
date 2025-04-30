import React, { useEffect, useState } from 'react';
import { TonConnectButton, useTonAddress, useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';

const WalletPage: React.FC = () => {
  const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(true);
  const [connectionError, setConnectionError] = useState('');
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra trạng thái kết nối sau khi component được mount
    const checkConnection = async () => {
      try {
        setIsLoading(true);
        // Đợi 3 giây để xem có kết nối được không
        setTimeout(() => {
          if (!wallet) {
            setConnectionError('Không thể kết nối với ví. Vui lòng thử lại.');
          } else {
            // Xóa thông báo lỗi nếu ví đã được kết nối
            setConnectionError('');
            // Bắt đầu đếm ngược để chuyển về trang chủ
            setRedirectCountdown(3);
          }
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error('Lỗi kết nối:', error);
        setConnectionError('Đã xảy ra lỗi khi kết nối với ví.');
        setIsLoading(false);
      }
    };

    checkConnection();
  }, [wallet, tonConnectUI]);

  // Xử lý đếm ngược và chuyển hướng trang
  useEffect(() => {
    if (redirectCountdown === null) return;

    if (redirectCountdown <= 0) {
      // Chuyển hướng về trang chủ khi đếm ngược kết thúc
      navigate('/');
      return;
    }

    // Cập nhật đếm ngược mỗi giây
    const timer = setTimeout(() => {
      setRedirectCountdown(redirectCountdown - 1);
    }, 1000);

    // Dọn dẹp timer khi component unmount hoặc redirectCountdown thay đổi
    return () => clearTimeout(timer);
  }, [redirectCountdown, navigate]);

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

        {isLoading && wallet && (
          <div className="text-center mb-4">
            <p className="text-blue-600">Đang kết nối với ví...</p>
            <div className="loader mt-2 mx-auto"></div>
          </div>
        )}

        {!isLoading && wallet && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
            <p className="text-sm text-green-800 font-medium">Đã kết nối thành công!</p>
            <p className="text-sm text-green-700 mt-2">Địa chỉ ví: {userFriendlyAddress}</p>
            <p className="text-sm text-green-700 mt-1">Mạng: Testnet</p>
            {redirectCountdown !== null && (
              <p className="text-sm text-blue-600 mt-3 font-medium">
                Bạn sẽ được chuyển về trang chủ sau {redirectCountdown} giây...
              </p>
            )}
          </div>
        )}

        {!isLoading && !wallet && connectionError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <p className="text-sm text-red-800">{connectionError}</p>
            <p className="text-sm text-red-700 mt-2">Vui lòng thử kết nối lại hoặc sử dụng ví khác.</p>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">Lưu ý:</span> Kết nối ví TON an toàn và bảo mật.
            Chúng tôi không lưu trữ khóa riêng tư của bạn và bạn luôn kiểm soát hoàn toàn tài sản của mình.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .loader {
          border: 3px solid #f3f3f3;
          border-radius: 50%;
          border-top: 3px solid #3498db;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default WalletPage;
