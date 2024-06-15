import React, { useState } from 'react'; 
import "./login.css";
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';

const adminLogin = () => {


  const [formData, setFormData] = useState({
    emailId: '',
    password: ''
  }); 

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
      console.log(response.data, 'api response'); // handle response
      if (res === "Login Successfull") {
          // alert(res);

          navigate('/dashboard');
          
      } 
      else { 
          alert(res);
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
          <input type="text" placeholder="Enter Your Email" id='emailId' value={formData.emailId} onChange={(e) => setFormData({ ...formData, emailId: e.target.value })} required />
          <div className="adminLogin-underline" />
        </div>
        <div className="adminLogin-input-box">
          <input type="password" placeholder="Enter Your Password" id='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}required />
          <div className="adminLogin-underline" />
        </div>
        <div className="adminLogin-input-box adminLogin-button">
          {/* <Link to="/dashboard"> */}
          <input type="submit" name="defaultValue" value="Continue" />
          {/* </Link> */}
        </div>
      </form>
      
    </div>
    </div>
  );
}

export default adminLogin;
