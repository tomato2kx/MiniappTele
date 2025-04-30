import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4 pt-16 pb-20">
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
