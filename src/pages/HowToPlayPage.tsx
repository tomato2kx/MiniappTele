import React from 'react';

const HowToPlayPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4 pt-16 pb-20">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cách Chơi
        </h1>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-lg font-semibold text-gray-800">Trang này sẽ được cập nhật sau</h2>
            <p className="text-gray-600">
              Hướng dẫn chi tiết về cách chơi xổ số sẽ được cập nhật trong thời gian tới.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <p className="text-sm text-yellow-800">
              <span className="font-bold">Lưu ý:</span> Đây là phiên bản demo của ứng dụng. 
              Các tính năng đầy đủ sẽ được phát triển trong tương lai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayPage;
