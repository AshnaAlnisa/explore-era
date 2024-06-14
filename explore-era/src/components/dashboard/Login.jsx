import React from 'react';
import "./login.css";

const adminLogin = () => {
  return (
    <div className='adminLogin-page'>
    <div className="adminLogin-container">
      <form action="#">
        <div className="adminLogin-title">Admin Login</div>
        <div className="adminLogin-input-box adminLogin-underline">
          <input type="text" placeholder="Enter Your Email" required />
          <div className="adminLogin-underline" />
        </div>
        <div className="adminLogin-input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div className="adminLogin-underline" />
        </div>
        <div className="adminLogin-input-box adminLogin-button">
          <input type="submit" name="defaultValue" value="Continue" />
        </div>
      </form>
      
    </div>
    </div>
  );
}

export default adminLogin;
