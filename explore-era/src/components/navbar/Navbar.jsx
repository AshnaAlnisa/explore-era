import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import DropdownHoliday from "../dropdown/DropdownHoliday";
import DropdownPackages from "../dropdown/DropdownPackages";
import DropdownWeekendGateways from "../dropdown/DropdownWeekendGateways";
import Popup from "../popup/Popup";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = (index) => {
    setDropdownActive(dropdownActive === index ? null : index);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/home">
          <h2>
            <span>E</span>xplore
            <span>E</span>ra
          </h2>
        </Link>
      </div>

      

      <div className={`menu-link ${menuActive ? "active" : ""}`}>
        <ul>
          <li
            className="link"
            onMouseEnter={() => toggleDropdown(0)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">
              Destinations <img src="/images/dropdown-arrow.svg.png" alt="" />
            </a>
            {dropdownActive === 0 && <Dropdown />}
          </li>
          <li
            className="link"
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">
              Holiday Ideas{" "}
              <img src="/images/dropdown-arrow.svg.png" alt="" />
            </a>
            {dropdownActive === 1 && <DropdownHoliday />}
          </li>
          <li
            className="link"
            onMouseEnter={() => toggleDropdown(2)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">
              Packages <img src="/images/dropdown-arrow.svg.png" alt="" />
            </a>
            {dropdownActive === 2 && <DropdownPackages />}
          </li>
          <li
            className="link"
            onMouseEnter={() => toggleDropdown(3)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">
              Weekend Getaways{" "}
              <img src="/images/dropdown-arrow.svg.png" alt="" />
            </a>
            {dropdownActive === 3 && <DropdownWeekendGateways />}
          </li>
        </ul>
      </div>

      <div className="details">
        <ul className="details-desktop">
          <li className="phone-number">+918287675984</li>

          <div className="p-y-t">
            <li className="plan-your-trip">
              <img src="/images/icons8-location-64.png" alt="" />
              <button className="book-button" onClick={togglePopup}>
                Plan Your Trip
              </button>
            </li>
            {isPopupVisible && <Popup onClose={togglePopup} />}
          </div>
        </ul>
      </div>

      <button
        className={`menu-toggle ${menuActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
