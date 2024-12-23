import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-teal-100 px-4 py-3 border-b border-gray-300">
      <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
      <div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 mr-2">
          Add an expense
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Settle up
        </button>
      </div>
    </div>
  );
};

export default Header;
