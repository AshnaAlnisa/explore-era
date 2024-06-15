import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./form.css";

const BookYourTripFormDetails = () => {
  const [uploads, setUploads] = useState([
    {
      id: 1,
      NAME: "Inaya",
      COUNTRY: "India",
      EMAILID: "inaya@gmail.com",
      TOURDESCRIPTIONS: "abcdefghijkl",
      TRAVELDATES: "2024-07-07",
      DURATIONOFTHESTAY: "5 days",
      NOOFPERSON: 8,
      CONTACTNO: 8565,
    },
    {
      id: 2,
      NAME: "Zayna",
      COUNTRY: "India",
      EMAILID: "zayna@gmail.com",
      TOURDESCRIPTIONS: "abcdefghijkl",
      TRAVELDATES: "2024-07-07",
      DURATIONOFTHESTAY: "5 days",
      NOOFPERSON: 4,
      CONTACTNO: 6565,
    },
    {
      id: 2,
      NAME: "Zaira",
      COUNTRY: "India",
      EMAILID: "zaira@gmail.com",
      TOURDESCRIPTIONS: "gfhffsdfghijkl",
      TRAVELDATES: "2024-07-07",
      DURATIONOFTHESTAY: "2 days",
      NOOFPERSON: 2,
      CONTACTNO: 2465,
    },
    
    // Add more sample data as needed
  ]);

  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Edit upload with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete upload with ID ${id}`);
    setUploads(uploads.filter((upload) => upload.id !== id));
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
                {uploads.map((upload) => (
                  <tr key={upload.id}>
                    <td>{upload.id}</td>
                    <td>{upload.NAME}</td>
                    <td>{upload.COUNTRY}</td>
                    <td>{upload.EMAILID}</td>
                    <td>{upload.TOURDESCRIPTIONS}</td>
                    <td>{upload.TRAVELDATES}</td>
                    <td>{upload.DURATIONOFTHESTAY}</td>
                    <td>{upload.NOOFPERSON}</td>
                    <td>{upload.CONTACTNO}</td>
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

export default BookYourTripFormDetails
