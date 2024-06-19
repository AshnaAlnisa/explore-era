import React from "react";
import "./dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <nav className="dashboard-nav">
        <div className="logo">
          <h2>
            <span>E</span>xplore
            <span>E</span>ra
          </h2>
        </div>
        <div className="dashboard-menu-items">
          <ul className="dashboard-nav-links">
            <li>
              <NavLink exact to="/adminWelcome" activeClassName="active">
                <span className="dashboard-link-name">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/enquiryFormDetails" activeClassName="active">
                <span className="dashboard-link-name">
                  Enquiry Form Details
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/bookYourTripFormDetails" activeClassName="active">
                <span className="dashboard-link-name">
                  Book Your Trip Form Details
                </span>
              </NavLink>
            </li>
          </ul>
          <ul className="dashboard-logout">
            <li>
              <NavLink exact to="/home" className="logout-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
