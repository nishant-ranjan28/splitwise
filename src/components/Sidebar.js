import React from 'react';
import InviteFriends from './InviteFriends';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white border-r border-gray-300 h-screen p-4">
      <div className="mb-4">
        <h3 className="text-gray-700 font-semibold">Groups</h3>
        <p className="text-sm text-gray-500">
          Hiding accounts settled for more than 30 days...
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 font-semibold">Friends</h3>
        <p className="text-sm text-gray-500">
          Hiding accounts settled for more than 30 days...
        </p>
      </div>
      <InviteFriends />
    </div>
  );
};

export default Sidebar;
