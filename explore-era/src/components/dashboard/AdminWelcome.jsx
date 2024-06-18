import React from 'react'
import "./adminWelcome.css"
import Dashboard from './Dashboard'

const AdminWelcome = () => {
  return (
    <>
    <Dashboard />
    <div className="dashboard-details">
        {/* <h1>Welcome <br /><span>ASHNA ALNISA</span> <br />To The <br />Admin Page</h1> */}
        <div><h1>Welcome</h1></div>
        <div className="name"><h1>ASHNA ALNISA</h1></div>
        <div><h1>To The </h1></div>
        <div><h1>Admin Page</h1></div>
      </div>
      </>
  )
}

export default AdminWelcome