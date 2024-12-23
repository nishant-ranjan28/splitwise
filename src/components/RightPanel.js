import React from 'react';

const RightPanel = () => {
  return (
    <div className="w-1/4 bg-white border-l border-gray-300 h-screen p-4">
      <div className="bg-purple-100 p-4 rounded-md">
        <h3 className="text-purple-700 font-bold">Get Splitwise Pro!</h3>
        <p className="text-sm text-gray-600 my-2">
          No ads, currency conversion, charts, and more.
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
