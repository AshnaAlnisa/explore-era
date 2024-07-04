import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = async () => {
    try {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const updatePayload = {
        eventID: "1001",
        addInfo: {
          EMAIL: email,
          PASSWORD: newPassword,
        },
      };

      console.log("Update Payload:", updatePayload);

      const response = await axios.post(
        "http://localhost:5164/updatepassword",
        updatePayload
      );
      const { data } = response;

      console.log("Update Response:", data);

      if (data) {
        alert("Password updated successfully!");
        navigate("/login");
      } else {
        alert(data.resData.rData.message);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Error updating password. Please try again.");
    }
  };

  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <div className="title pull-left">
            <h3>Set New Password</h3>
          </div>
        </div>
      </section>
      <div className="login-container1">
        <form className="login-form1">
         
          
          <div className="form-group1">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group1">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          
         
          <button
            className="buttonforverify"
            type="button"
            onClick={handlePasswordUpdate}
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
