import React from 'react';

const InviteFriends = () => {
  return (
    <div className="mt-4">
      <h3 className="text-gray-800 font-semibold mb-2">Invite Friends</h3>
      <input
        type="email"
        placeholder="Enter an email address"
        className="w-full border border-gray-300 rounded-md px-2 py-1 mb-2"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Send Invite
      </button>
    </div>
  );
};

export default InviteFriends;
