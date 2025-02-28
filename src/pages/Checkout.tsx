import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Updated import

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState(50);

  const paymentMethods = [
    { name: "Bitcoin", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Ethereum", address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" },
    { name: "Bnb Coin", address: "bnb1qxy2kgdygjrsqtzq2n0yrf2493p83kkfj4x4wn" },
    { name: "Tether", address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" },
  ];

  const handleDeposit = (method) => {
    setSelectedMethod(method);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Checkout</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-lg font-medium text-gray-700">
            Amount to Deposit (Minimum $50)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            min="50"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Choose your payment method:</h2>
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex justify-between items-center p-4 border border-gray-300 rounded-md">
              <span className="text-lg">{method.name}</span>
              <button
                onClick={() => handleDeposit(method)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Deposit
              </button>
            </div>
          ))}
        </div>

        {showPopup && selectedMethod && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg space-y-4">
              <h2 className="text-2xl font-bold">Deposit {selectedMethod.name}</h2>
              <p>Please send ${amount} to the following address:</p>
              <p className="font-mono bg-gray-100 p-2 rounded-md">{selectedMethod.address}</p>
              <QRCodeSVG value={selectedMethod.address} /> {/* Updated component */}
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;