import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import DropdownHoliday from "../dropdown/DropdownHoliday";
import DropdownPackages from "../dropdown/DropdownPackages";
import DropdownWeekendGateways from "../dropdown/DropdownWeekendGateways";
import Popup from "../popup/Popup";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownHoliday, setDropdownHoliday] = useState(false);
  const [dropdownPackages, setDropdownPackages] = useState(false);
  const [dropdownWeekendGateways, setDropdownWeekendGateways] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/home">
            <h2>
              <span>E</span>xplore
              <span>E</span>ra
            </h2>
          </Link>
        </div>

        <div className="menu-link">
          <ul>
            <li
              className="link"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <a href="#">
                Destinations <img src="/images/dropdown-arrow.svg.png" alt="" />
              </a>
              {dropdown && <Dropdown />}
            </li>
            <li
              className="link"
              onMouseEnter={() => setDropdownHoliday(true)}
              onMouseLeave={() => setDropdownHoliday(false)}
            >
              <a href="#">
                Holiday Ideas{" "}
                <img src="/images/dropdown-arrow.svg.png" alt="" />
              </a>
              {dropdownHoliday && <DropdownHoliday />}
            </li>
            <li
              className="link"
              onMouseEnter={() => setDropdownPackages(true)}
              onMouseLeave={() => setDropdownPackages(false)}
            >
              <a href="#">
                Packages <img src="/images/dropdown-arrow.svg.png" alt="" />
              </a>
              {dropdownPackages && <DropdownPackages />}
            </li>
            <li
              className="link"
              onMouseEnter={() => setDropdownWeekendGateways(true)}
              onMouseLeave={() => setDropdownWeekendGateways(false)}
            >
              <a href="#">
                Weekend Getaways{" "}
                <img src="/images/dropdown-arrow.svg.png" alt="" />
              </a>
              {dropdownWeekendGateways && <DropdownWeekendGateways />}
            </li>
          </ul>
        </div>

        <div className="details">
          <ul className="details-desktop">
            <li className="phone-number">8287675984</li>

            <div>
              <li className="plan-your-trip">
                {/* <a href="#"> */}
                  <img src="/images/icons8-location-64.png" alt="" />
                  <button
                    className="book-button"
                    onClick={() => setIsPopupVisible(true)}
                  >
                    Plan Your Trip
                  </button>
                {/* </a> */}
              </li>
              {isPopupVisible && (
              <Popup onClose={() => setIsPopupVisible(false)} />
            )}
            </div>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


