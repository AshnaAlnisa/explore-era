import React from 'react';
import "./adminWelcome.css";
import Dashboard from './Dashboard';

const AdminWelcome = () => {
  return (
    <div className='admin-welcome-wrapper'>
      <Dashboard />
      <div className='admin-welcome-body'>
        <div className="dashboard-details">
          <div><h1>Welcome</h1></div>
          <div className="name"><h1>ASHNA ALNISA</h1></div>
          <div><h1>To The </h1></div>
          <div><h1>Admin Page</h1></div>
        </div>
      </div>
    </div>
  );
}

export default AdminWelcome;
