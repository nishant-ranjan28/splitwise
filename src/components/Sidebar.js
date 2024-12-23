import React from 'react';
import InviteFriends from './InviteFriends';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300 p-4">
      <button className="w-full bg-orange-500 text-white py-2 rounded-md mb-4 hover:bg-orange-600">
        Add an expense
      </button>
      <button className="w-full bg-green-500 text-white py-2 rounded-md mb-4 hover:bg-green-600">
        Settle up
      </button>
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold mb-2">Groups</h3>
        <p className="text-gray-500">Hiding accounts settled for more than 30 days...</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold mb-2">Friends</h3>
        <p className="text-gray-500">Hiding accounts settled for more than 30 days...</p>
      </div>
      <InviteFriends />
    </div>
  );
};

export default Sidebar;
