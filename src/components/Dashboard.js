import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-grow bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">You're all set up. Awesome!</h2>
        <p className="text-gray-600">
          To add a new expense, click the orange "Add an expense" button.
        </p>
      </div>
      <div className="mt-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Placeholder illustration"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Dashboard;
