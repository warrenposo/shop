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
    { name: "Bitcoin", address: "163JAzy3CEz8YoNGDDtu9KxpXgnm5Kn9Rs" },
    { name: "Ethereum", address: "0x8c0fd3fdc6f56e658fb1bffa8f5ddd65388ba690" },
    { name: "Bnb Coin", address: "0x8c0fd3fdc6f56e658fb1bffa8f5ddd65388ba690" },
    { name: "Tether", address: "THaAnBqAvQ3YY751nXqNDzCoczYVQtBKnP" },
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
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary">Checkout</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Amount Input */}
        <div className="space-y-2 sm:space-y-4">
          <label className="block text-lg font-medium text-gray-700">
            Amount to Deposit (Minimum $50)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
            min="50"
          />
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Choose your payment method:</h2>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-300 rounded-md space-y-2 sm:space-y-0"
            >
              <span className="text-lg">{method.name}</span>
              <button
                onClick={() => handleDeposit(method)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Deposit
              </button>
            </div>
          ))}
        </div>

        {/* Deposit Popup */}
        {showPopup && selectedMethod && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg space-y-4 w-full max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold">Deposit {selectedMethod.name}</h2>
              <p>Please send ${amount} to the following address:</p>
              <p className="font-mono bg-gray-100 p-2 rounded-md text-sm sm:text-base break-all">
                {selectedMethod.address}
              </p>
              <div className="flex justify-center">
                <QRCodeSVG value={selectedMethod.address} size={128} /> {/* Adjusted size */}
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  Back
                </button>
                <button
                  onClick={handlePaid}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  I have paid
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg space-y-4 w-full max-w-md">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
              <p className="text-center">Processing payment...</p>
            </div>
          </div>
        )}

        {/* Refresh Button */}
        {showPaidPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg space-y-4 w-full max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold">Payment Confirmation</h2>
              <p className="text-sm sm:text-base">
                Your payment is being processed. Please refresh the page to check the status.
              </p>
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
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