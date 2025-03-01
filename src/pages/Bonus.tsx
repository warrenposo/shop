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
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Bonus Discounts</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Discount Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discount Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">FOR ONE TIME DEPOSIT 2005-4008</h3>
            <p className="text-gray-600 mb-4">Get a <span className="font-bold text-green-600">10% DISCOUNT</span> on your deposit.</p>
            <button
              onClick={() => handleGetDiscount(10)}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 10%
            </button>
          </div>

          {/* Discount Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">FOR ONE TIME DEPOSIT 4005-6008</h3>
            <p className="text-gray-600 mb-4">Get a <span className="font-bold text-green-600">15% DISCOUNT</span> on your deposit.</p>
            <button
              onClick={() => handleGetDiscount(15)}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 15%
            </button>
          </div>

          {/* Discount Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">FOR ONE TIME DEPOSIT 6005-9998</h3>
            <p className="text-gray-600 mb-4">Get a <span className="font-bold text-green-600">20% DISCOUNT</span> on your deposit.</p>
            <button
              onClick={() => handleGetDiscount(20)}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              GET DISCOUNT 20%
            </button>
          </div>

          {/* Discount Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">FOR ONE TIME DEPOSIT 10008</h3>
            <p className="text-gray-600 mb-4">Get a <span className="font-bold text-green-600">30% DISCOUNT</span> on your deposit.</p>
            <button
              onClick={() => handleGetDiscount(30)}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
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