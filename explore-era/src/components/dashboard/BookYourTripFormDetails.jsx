import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import "./form.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/register";
const DELETE_API = "http://localhost:5164/plan_your_trip_delete_details";

const BookYourTripFormDetails = () => {
  const [users, setUsers] = useState([]);


  const usenavigate = useNavigate() ;
  useEffect(()=>{
    let emailId = sessionStorage.getItem("EMAILID");
    if(emailId==='' || emailId === null)
      usenavigate('/login');
  }, []);

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



  const handleDelete = async (id) => {
    try {
      const response = await axios.post(DELETE_API, {
        eventID: "1002",
        addInfo: {
          id:id
        }
      });
      console.log("Delete Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData.rMessage === "DELETE SUCCESSFULLY.") {
          setUsers(users.filter(user => user.id !== id)); // Remove user from local state
          console.log(`User with ID ${id} deleted successfully`);
        } else {
          console.log("Failed to delete user");
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
    <div className="form-body">
      <Dashboard />
      <div className="form-container">
        <div className="table-container">
          <h3 className="form-heading">Book Your Trip Form Details</h3>
          <div className="main-content">
            <table className="table table-responsive form-table form-tab">
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
      </div>
    </>
  );
};

export default BookYourTripFormDetails;
