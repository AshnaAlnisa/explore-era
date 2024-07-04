import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const VerifyOTP = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
 

  const handleOtpVerification = async () => {
    try {
      // Check if email and OTP are entered
      if (!email || !otp) {
        alert("Please enter email and OTP.");
        return;
      }

      // Prepare payload for OTP verification
      const payload = {
        eventID: "1001",
        addInfo: {
          EMAIL: email,
          OTP: otp,
        },
      };

      console.log("Verification Payload:", payload);

      // Send POST request to verify OTP
      const response = await axios.post(
        "http://localhost:5164/verify",
        payload
      );
      const { data } = response;

      console.log("Verification Response:", data);

      // Check if data contains expected fields
      if (
        data &&
        data.result &&
        data.result.rData &&
        data.result.rData.message === "OTP verified successfully"
      ) {
        alert("OTP verified successfully.");
        // Proceed to update password UI or navigate to update password page
        navigate("/updatepassword");
      } else {
        // Handle case where OTP verification fails
        alert(data.result.rData.message || "Failed to verify OTP.");
      }
    } catch (error) {
      // Handle errors during OTP verification
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
    }
  };

  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <div className="title pull-left">
            <h3>Verify OTP</h3>
          </div>
        </div>
      </section>
      <div className="login-container1">
        <form className="login-form1">
          <div className="form-group1">
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="otp">Enter Received OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        
          <Link to="/changePassword">
          <button
            className="buttonforverify"
            type="button" navigate
            // onClick={handleOtpVerification}
          >
            Verify OTP
          </button>
          </Link>
          
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
