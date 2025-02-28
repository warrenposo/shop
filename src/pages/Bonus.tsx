import React from "react";
import { useNavigate } from "react-router-dom";

const Bonus = () => {
  const navigate = useNavigate();

  const handleGetDiscount = (discountPercentage: number) => {
    // Save the selected discount to localStorage (optional)
    localStorage.setItem("discount", JSON.stringify(discountPercentage));

    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Go Back to Dashboard Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
          >
            Go Back to Dashboard
          </button>
        </div>

        {/* Discount Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 text-center">
          <h2 className="text-xl font-bold mb-4">FULL AUTOMATIC DISCOUNT SYSTEMS</h2>
          <div className="discount-tier mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-md font-semibold mb-1">FOR ONE TIME DEPOSIT 2005-4008</h3>
            <p className="mb-2 text-gray-600 text-sm">10% DISCOUNT</p>
            <button
              onClick={() => handleGetDiscount(10)}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 10%
            </button>
          </div>
          <div className="discount-tier mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-md font-semibold mb-1">FOR ONE TIME DEPOSIT 4005-6008</h3>
            <p className="mb-2 text-gray-600 text-sm">15% DISCOUNT</p>
            <button
              onClick={() => handleGetDiscount(15)}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 15%
            </button>
          </div>
          <div className="discount-tier mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-md font-semibold mb-1">FOR ONE TIME DEPOSIT 6005-9998</h3>
            <p className="mb-2 text-gray-600 text-sm">20% DISCOUNT</p>
            <button
              onClick={() => handleGetDiscount(20)}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 20%
            </button>
          </div>
          <div className="discount-tier mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-md font-semibold mb-1">FOR ONE TIME DEPOSIT 10008</h3>
            <p className="mb-2 text-gray-600 text-sm">30% DISCOUNT</p>
            <button
              onClick={() => handleGetDiscount(30)}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 30%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;