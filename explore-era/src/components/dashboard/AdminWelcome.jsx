import React, { useEffect } from 'react';
import "./adminWelcome.css";
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

const AdminWelcome = () => {


  const usenavigate = useNavigate() ;
  useEffect(()=>{
    let emailId = sessionStorage.getItem("EMAILID");
    if(emailId==='' || emailId === null)
      usenavigate('/login');
  }, []);


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
