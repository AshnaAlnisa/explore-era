import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import "./form.css";

const API = "http://localhost:5164/enquiryForm"; // Assuming this endpoint is correct

const EnquiryFormDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.post(API, { eventID: "1002" });
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData && responseData.rData.users) {
          setUsers(responseData.rData.users);
          console.log("Users:", responseData.rData.users);
        } else {
          console.log("No users data in response");
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (id) => {
    console.log(`Edit user with ID ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID ${id}`);
    // Implement delete logic
  };

  return (
    <>
      <Dashboard />
      <div className="form-container">
        <div className="table-container">
          <h3>Enquiry Form Details</h3>
          <div className="main-content">
            <table className="form-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>FULL NAME</th>
                  <th>TOUR DESCRIPTION</th>
                  <th>DEPARTURE DATE</th>
                  <th>NUMBER OF DAYS</th>
                  <th>EMAIL</th>
                  <th>CONTACT NO</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.tourDescription}</td>
                    <td>{user.departureDate}</td>
                    <td>{user.numberOfDays}</td>
                    <td>{user.email}</td>
                    <td>{user.contactNo}</td>
                    <td>
                      {/* <button onClick={() => handleEdit(user.id)}>Edit</button> */}
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryFormDetails;
