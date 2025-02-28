import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Mydumps = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Mydumps</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Title with Updates */}
        <h2 className="text-2xl font-bold text-center">
          Dumps <span className="text-red-600 font-bold">Updates Ready! 2025/01/24</span>
        </h2>

        {/* Filters Section */}
        <div className="filters grid grid-cols-3 gap-4 mb-6">
          <div className="filter-group">
            <label className="block text-sm font-medium text-gray-700">Category:</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>All</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="block text-sm font-medium text-gray-700">Bin:</label>
            <input
              type="text"
              placeholder="Enter BIN"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="filter-group">
            <label className="block text-sm font-medium text-gray-700">Last 4:</label>
            <input
              type="text"
              placeholder="Last 4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="filter-group">
            <label className="block text-sm font-medium text-gray-700">Type:</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>All</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="block text-sm font-medium text-gray-700">Class:</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300">Number</th>
              <th className="p-3 border border-gray-300">Balance Checked (MIN=$)</th>
              <th className="p-3 border border-gray-300">Level</th>
              <th className="p-3 border border-gray-300">Class</th>
              <th className="p-3 border border-gray-300">Code</th>
              <th className="p-3 border border-gray-300">Type</th>
              <th className="p-3 border border-gray-300">Category</th>
              <th className="p-3 border border-gray-300">Country</th>
              <th className="p-3 border border-gray-300">Bank</th>
              <th className="p-3 border border-gray-300">Action/Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="10"
                className="p-3 border border-gray-300 text-center text-gray-500 italic"
              >
                You have no dumps available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mydumps;