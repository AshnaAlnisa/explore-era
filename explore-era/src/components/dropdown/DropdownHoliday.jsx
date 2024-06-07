import { HolidayIdeasDropdown } from "./DropdownItems";
import "./dropdown.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const DropdownHoliday = () => {
    const [dropdownHoliday, setDropdownHoliday] = useState(false);
    return (
      <>
        <ul
          className={dropdownHoliday ? "nav-submenu clicked" : "nav-submenu"}
          onClick={() => setDropdownHoliday(!dropdown)}
        >
          {HolidayIdeasDropdown.map((items) => {
            return (
              <li key={items.id}>
                <Link
                  to={items.path}
                  className= {items.cName}
                  onClick={() => setDropdownHoliday(false)}
                >
                  {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  
  export default DropdownHoliday;
  