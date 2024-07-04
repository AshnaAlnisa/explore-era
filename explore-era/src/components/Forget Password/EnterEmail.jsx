import React, { useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const EnterEmail = () => {


    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  
    const handleForgotPassword = async (e) => {
      e.preventDefault();
  
      const payload = {
        eventID: "1002",
        addInfo: {
          EMAILID: email
        }
      };
  
      try {
        const response = await axios.post('http://localhost:5164/generate', payload);
        const res = response.data.result.rData.rMessage;
  
        if (res === 'OTP generated successfully') {
          alert(res);
        //   navigate('/forgotpassword');
        } else {
          alert(res || 'Failed to send OTP');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        alert('Error sending OTP. Please try again.');
      }
    };
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  

    return (
        <div className='adminLogin-page'>
         
          <div className="adminLogin-container">
            <form className="adminLogin-form" onSubmit={handleForgotPassword}>
            <div className="adminLogin-title">Generate OTP</div>
              <div className="adminLogin-input-box adminLogin-underline">
                {/* <label htmlFor="email">Enter your email to receive OTP:</label> */}
                <input
                  type="email"
                  placeholder="Enter your email to receive OTP"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div className="adminLogin-underline" />
              </div>
              <div className="adminLogin-input-box adminLogin-button">
              <input type="submit" name="defaultValue" value="Generate" OTP />
              </div>

              <Link to='/verifyOTP'><p>verify OTP</p></Link>
              
            </form>
          </div>
        </div>
      );
      
}

export default EnterEmail