import React from "react";
import { Link } from "react-router-dom"; // Import Link

const CCChecker = () => {
  return (
    <div className="cc-checker bg-background p-5 border border-border rounded-lg max-w-3xl mx-auto my-10 shadow-lg">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-foreground">
          Credit Card Checker 1 line = 1 card
        </h1>
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="price-info bg-card p-4 rounded-md shadow-sm mb-5">
        <p className="text-muted-foreground">Price:</p>
        <p className="text-muted-foreground">Checker price: 0.3 $ /piece</p>
        <p className="text-muted-foreground">1 card = 1 line</p>
      </div>

      <div className="example bg-card p-4 rounded-md shadow-sm mb-5">
        <p className="text-muted-foreground">Example:</p>
        <pre className="bg-muted text-muted-foreground p-3 rounded-md overflow-x-auto">
          {`54574797921000000003224116
54574797921000000003224116
5.4542.4999.1000.0000000002445184.00a.Do_Ls_3.76rawCStandardKDMIStandardLd:270C275.CrowardMw1`}
        </pre>
      </div>

      <div className="input-section bg-card p-4 rounded-md shadow-sm mb-5">
        <h2 className="text-xl font-semibold text-foreground mb-3">
          Credit Card Checker
        </h2>
        <textarea
          placeholder="Paste your credit card list here..."
          className="w-full h-40 p-3 border border-border rounded-md bg-background text-foreground resize-y"
        />
      </div>

      <div className="actions flex gap-3 flex-wrap mb-5">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Duplicates Remove
        </button>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Sort by type
        </button>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Sort Date
        </button>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Check DIN Info
        </button>
      </div>

      <Link
        to="/checkout"
        className="check-now bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700 transition-colors text-center block"
      >
        Check Now
      </Link>
    </div>
  );
};

export default CCChecker;