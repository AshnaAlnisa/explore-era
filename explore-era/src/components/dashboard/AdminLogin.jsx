import React, { useEffect, useState } from 'react';
import "./login.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  useEffect(()=>{
    sessionStorage.clear();
  })


  const [formData, setFormData] = useState({
    emailId: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1002",
      addInfo: {
        EMAILID: formData.emailId,
        PASSWORD: formData.password
      }
    };

    try {
      const response = await axios.post('http://localhost:5164/myLogin', payload);
      let res = response.data.rData.rMessage;
      console.log(response.data, 'api response');

      if (res === "Login Successfull") {
        sessionStorage.setItem("EMAILID",emailId);
        navigate('/adminWelcome');
      } else {
        setErrorMessage('Username or Password incorrect. Please try again.');
        setFormData({
            emailId: '',
            password: ''
          });
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again later.'); // Handle error
    }
  };

  return (
    <div className='adminLogin-page'>
      <div className="adminLogin-container">
        <form onSubmit={handleSubmit}>
          <div className="adminLogin-title">Admin Login</div>
          <div className="adminLogin-input-box adminLogin-underline">
            <input
              type="text"
              placeholder="Enter Your Email"
              id='emailId'
              value={formData.emailId}
              onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
              required
            />
            <div className="adminLogin-underline" />
          </div>
          <div className="adminLogin-input-box">
            <input
              type="password"
              placeholder="Enter Your Password"
              id='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <div className="adminLogin-underline" />
            {errorMessage && <div className="adminLogin-error-message">{errorMessage}</div>}
          </div>
          <div className="adminLogin-input-box adminLogin-button">
            <input type="submit" name="defaultValue" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
