import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">You're all set up. Awesome!</h2>
        <p className="text-gray-600">
          To add a new expense, click the orange "Add an expense" button.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
