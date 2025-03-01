import React from "react";
import { useNavigate } from "react-router-dom";

const Mycards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Back to Dashboard Button */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary">Mycards</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Filter Cards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Category:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Bin:</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Enter Bin"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Country:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">State:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">City:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Zip:</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Enter Zip"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Type:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Cards per page:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>10</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-1">Page:</label>
              <select className="p-2 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>1</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Go!
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Type</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Bin</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Exp Date</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Category</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Country</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">State</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">City</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Zip</th>
                <th className="p-2 text-left text-gray-700 text-sm sm:text-base">Action/Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9} className="p-4 text-center text-gray-500 text-sm sm:text-base">
                  You have no cards available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mycards;