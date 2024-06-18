import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import "./form.css";

const API = "http://localhost:5164/register";

const BookYourTripFormDetails = () => {
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
          <h3 className="form-heading">Book Your Trip Form Details</h3>
          <div className="main-content">
            <table className="form-table form-tab">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>COUNTRY</th>
                  <th>EMAILID</th>
                  <th>TOURDESCRIPTIONS</th>
                  <th>TRAVELDATES</th>
                  <th>DURATIONOFTHESTAY</th>
                  <th>NOOFPERSON</th>
                  <th>CONTACTNO</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.country}</td>
                    <td>{user.emailId}</td>
                    <td>{user.tourDescriptions}</td>
                    <td>{user.travelDates}</td>
                    <td>{user.durationOfTheStay}</td>
                    <td>{user.noOfPerson}</td>
                    <td>{user.contactNo}</td>
                    <td>
                      {/* <button onClick={() => handleEdit(user.id)}>
                        Edit
                      </button> */}
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
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

export default BookYourTripFormDetails;
