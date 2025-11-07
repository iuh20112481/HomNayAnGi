import React, { useState } from 'react';
import { Shuffle, Coffee, Sun, Moon, Sparkles } from 'lucide-react';

const VietnameseMealRandomizer = () => {
  const [meals, setMeals] = useState({
    sang: null,
    trua: null,
    toi: null,
    anvat: null
  });

  const [animating, setAnimating] = useState({
    sang: false,
    trua: false,
    toi: false,
    anvat: false
  });

  const mealData = {
    sang: [
      'Phở bò', 'Bánh mì pâté', 'Bún bò Huế', 'Xôi xéo', 
      'Bánh cuốn', 'Hủ tiếu', 'Cháo lòng', 'Bánh bao',
      'Bánh mì trứng', 'Xôi gấc', 'Bún riêu', 'Mì Quảng',
      'Cơm tấm sườn', 'Bánh bột lọc', 'Xôi vò', 'Bánh ướt',
      'Cháo gà', 'Bánh khọt', 'Xôi gà', 'Bún thịt nướng'
    ],
    trua: [
      'Cơm sườn', 'Bún chả', 'Phở gà', 'Cơm tấm', 
      'Bún đậu mắm tôm', 'Cơm gà', 'Bánh xèo', 'Cao lầu',
      'Bún bò Nam Bộ', 'Cơm rang dưa bò', 'Mì Quảng', 'Bánh canh',
      'Cơm chiên', 'Bún mắm', 'Hủ tiếu Nam Vang', 'Cơm hến',
      'Bánh bèo', 'Nem nướng', 'Cơm niêu', 'Bún ốc'
    ],
    toi: [
      'Lẩu thái', 'Cơm sườn nướng', 'Cơm chiên hải sản', 'Phở gà',
      'Lẩu gà lá é', 'Cơm gà xối mỡ', 'Bún riêu cua', 'Cơm tấm',
      'Lẩu cá kèo', 'Phở bò', 'Nem lui', 'Cơm rang',
      'Bánh xèo', 'Mì xào giòn', 'Lẩu mắm', 'Cháo vịt',
      'Bún bò Huế', 'Bánh canh cua', 'Mì Quảng', 'Bún thịt nướng'
    ],
    anvat: [
      'Bánh tráng trộn', 'Bánh tráng nướng', 'Ốc hấp', 'Gỏi cuốn',
      'Nem chua rán', 'Chả giò', 'Bánh bột lọc', 'Bánh bèo',
      'Bánh khọt', 'Xôi chiên', 'Khoai lang lắc', 'Sữa chua dẻo',
      'Chè thập cẩm', 'Bánh flan', 'Bánh chuối nướng', 'Kem bơ',
      'Chân gà sả tắc', 'Mực nướng', 'Ram bắp', 'Khoai tây chiên',
      'Chả cá', 'Há cảo chiên', 'Bánh bao chiên', 'Phồng tôm'
    ]
  };

  const getRandomMeal = (mealType) => {
    const mealList = mealData[mealType];
    const randomIndex = Math.floor(Math.random() * mealList.length);
    return mealList[randomIndex];
  };

  const handleRandomSingle = (mealType) => {
    setAnimating(prev => ({ ...prev, [mealType]: true }));
    setMeals(prev => ({
      ...prev,
      [mealType]: getRandomMeal(mealType)
    }));
    setTimeout(() => {
      setAnimating(prev => ({ ...prev, [mealType]: false }));
    }, 300);
  };

  const handleRandomAll = () => {
    setAnimating({ sang: true, trua: true, toi: true, anvat: true });
    setMeals({
      sang: getRandomMeal('sang'),
      trua: getRandomMeal('trua'),
      toi: getRandomMeal('toi'),
      anvat: getRandomMeal('anvat')
    });
    setTimeout(() => {
      setAnimating({ sang: false, trua: false, toi: false, anvat: false });
    }, 300);
  };

  const MealCard = ({ icon: Icon, title, mealType, color, bgColor }) => (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`${color} w-8 h-8`} />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="bg-white rounded-xl p-6 mb-4 min-h-[100px] flex items-center justify-center">
        {meals[mealType] ? (
          <p className={`text-3xl font-bold text-gray-800 text-center ${animating[mealType] ? 'animate-fadeIn' : ''}`}>
            {meals[mealType]}
          </p>
        ) : (
          <p className="text-gray-400 text-lg text-center">
            Nhấn để chọn món...
          </p>
        )}
      </div>

      <button
        onClick={() => handleRandomSingle(mealType)}
        className={`w-full ${color.replace('text-', 'bg-')} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md`}
      >
        <Shuffle className="w-5 h-5" />
        Random
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-500 w-12 h-12" />
            Hôm Nay TrangChos Ăn Gì?
            <Sparkles className="text-yellow-500 w-12 h-12" />
          </h1>
          <p className="text-gray-600 text-lg">
            Không biết ăn gì? Để Huyvjpro gợi ý cho 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MealCard
            icon={Coffee}
            title="Buổi Sáng"
            mealType="sang"
            color="text-amber-600"
            bgColor="bg-amber-100"
          />
          <MealCard
            icon={Sun}
            title="Buổi Trưa"
            mealType="trua"
            color="text-orange-600"
            bgColor="bg-orange-100"
          />
          <MealCard
            icon={Moon}
            title="Buổi Tối"
            mealType="toi"
            color="text-indigo-600"
            bgColor="bg-indigo-100"
          />
          <MealCard
            icon={Sparkles}
            title="Ăn Vặt"
            mealType="anvat"
            color="text-pink-600"
            bgColor="bg-pink-100"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleRandomAll}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 px-12 rounded-2xl font-bold text-xl hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mx-auto"
          >
            <Shuffle className="w-6 h-6" />
            Random Tất Cả
            <Shuffle className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
export default VietnameseMealRandomizer;