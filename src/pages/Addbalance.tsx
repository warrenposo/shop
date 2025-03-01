import { useNavigate } from "react-router-dom";

const Addbalance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Balance Checker</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">Example:</h2>
          <p className="text-gray-700 mb-4">47B64U0D042QD15P2E0251T3FGA4PE1T 0LVEGA1F6J MUB ROADMASTNE2ICA9AS553JUNTE3 STATES</p>
          <h2 className="text-2xl font-semibold text-primary mb-4">Price:</h2>
          <p className="text-gray-700 mb-4">1 CC - $2 Credit</p>

          {/* Placeholder for pasting */}
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            placeholder="Paste your code here..."
            rows="4"
          />

          <button
            onClick={() => navigate("/checkout")}
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addbalance;