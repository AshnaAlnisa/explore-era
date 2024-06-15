import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import Dashboard from "./Dashboard";
import "./form.css";

const EnquiryFormDetails = () => {
  // State to hold the uploads data fetched from the database
  const [uploads, setUploads] = useState([
    {
      id: 1,
      fullName: "Placeholder",
      tourDescription: "Placeholder Data",
      departureDate: "2024-07-05",
      numberOfDays: "3",
      email: "placeholder@example.com",
      contactNo: "1234567890",
    },
  ]);

  // Function to fetch data from the database
  const fetchUploads = async () => {
    try {
      console.log("Fetching uploads...");
      const response = await axios.post("http://localhost:5164/enquiryForm");
      console.log("Response:", response.data); // Log response data for debugging
      setUploads(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching uploads:", error);
      // Handle error as needed
    }
  };
  

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchUploads();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Edit upload with ID ${id}`);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     // Replace with your API endpoint that deletes an upload
  //     await axios.delete(`http://localhost:5164/deleteUpload/${id}`);

  //     // Update state after successful deletion
  //     setUploads(uploads.filter((upload) => upload.id !== id));
  //     console.log(`Deleted upload with ID ${id}`);
  //   } catch (error) {
  //     console.error(`Error deleting upload with ID ${id}:`, error);
  //     // Handle error as needed
  //   }
  // };

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
                {uploads.map((upload) => (
                  <tr key={upload.id}>
                    <td>{upload.id}</td>
                    <td>{upload.fullName}</td>
                    <td>{upload.tourDescription}</td>
                    <td>{upload.departureDate}</td>
                    <td>{upload.numberOfDays}</td>
                    <td>{upload.email}</td>
                    <td>{upload.contactNo}</td>
                    <td>
                      <button onClick={() => handleEdit(upload.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(upload.id)}>
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

export default EnquiryFormDetails;
