import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import RightPanel from './components/RightPanel';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Dashboard />
        {/* <RightPanel /> */}
      </div>
    </div>
  );
};

export default App;
