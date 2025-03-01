import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Updated import

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPaidPopup, setShowPaidPopup] = useState(false);
  const [amount, setAmount] = useState(50);
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

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

  const handlePaid = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
      setShowPaidPopup(true); // Show the refresh button
    }, 2000); // Simulate a 2-second delay
    setShowPopup(false); // Close the deposit popup when moving to the payment confirmation popup
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email
    setTimeout(() => {
      setEmailSent(true);
    }, 2000); // Simulate a 2-second delay for email sending
  };

  const handleContactSupport = () => {
    // Replace with your support number
    alert("Please contact support at +1234567890");
  };

  const handleRefresh = () => {
    setShowPaidPopup(false); // Hide the refresh button
    setShowPopup(true); // Show the deposit popup again
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

        {/* Deposit Popup */}
        {showPopup && selectedMethod && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg space-y-4">
              <h2 className="text-2xl font-bold">Deposit {selectedMethod.name}</h2>
              <p>Please send ${amount} to the following address:</p>
              <p className="font-mono bg-gray-100 p-2 rounded-md">{selectedMethod.address}</p>
              <QRCodeSVG value={selectedMethod.address} /> {/* Updated component */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handlePaid}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  I have paid
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg space-y-4">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
              <p className="text-center">Processing payment...</p>
            </div>
          </div>
        )}

        {/* Refresh Button */}
        {showPaidPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg space-y-4">
              <h2 className="text-2xl font-bold">Payment Confirmation</h2>
              <p>Your payment is being processed. Please refresh the page to check the status.</p>
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;