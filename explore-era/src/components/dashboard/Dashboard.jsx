import React, { useEffect } from 'react';
import "./dashboard.css";
import Login from './Login';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const backToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

  useEffect(() => {
    const body = document.querySelector("body");
    const modeToggle = document.querySelector(".dashboard-mode-toggle");
    const sidebar = document.querySelector(".dashboard-nav");
    const sidebarToggle = document.querySelector(".dashboard-sidebar-toggle");

    // Get mode and status from local storage
    const getMode = localStorage.getItem("dashboard-mode");
    if (getMode && getMode === "dark") {
      body.classList.add("dashboard-dark");
    }

    const getStatus = localStorage.getItem("dashboard-status");
    if (getStatus && getStatus === "close") {
      sidebar.classList.add("dashboard-close");
    }

    // Mode toggle event
    const handleModeToggle = () => {
      body.classList.toggle("dashboard-dark");
      if (body.classList.contains("dashboard-dark")) {
        localStorage.setItem("dashboard-mode", "dark");
      } else {
        localStorage.setItem("dashboard-mode", "light");
      }
    };

    // Sidebar toggle event
    const handleSidebarToggle = () => {
      sidebar.classList.toggle("dashboard-close");
      if (sidebar.classList.contains("dashboard-close")) {
        localStorage.setItem("dashboard-status", "close");
      } else {
        localStorage.setItem("dashboard-status", "open");
      }
    };

    if (modeToggle) {
      modeToggle.addEventListener("click", handleModeToggle);
    }
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", handleSidebarToggle);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (modeToggle) {
        modeToggle.removeEventListener("click", handleModeToggle);
      }
      if (sidebarToggle) {
        sidebarToggle.removeEventListener("click", handleSidebarToggle);
      }
    };
  }, []);

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
            <li><Link to="/dashboard">
              <span className="dashboard-link-name">Dashboard</span>
            </Link></li>
            <li><Link to="/enquiryFormDetails">
              <span className="dashboard-link-name">Enquiry Form Details</span>
            </Link></li>
            <li><Link to="/bookYourTripFormDetails">
              <span className="dashboard-link-name">Book Your Trip Form Details</span>
            </Link></li>
            <li><Link to="/addPackages">
              <span className="dashboard-link-name">Add Packages</span>
            </Link></li>
          </ul>
          <ul className="dashboard-logout">
            <li>
                <Link to="/home" onClick={backToTop}>
                    Logout
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Dashboard;
