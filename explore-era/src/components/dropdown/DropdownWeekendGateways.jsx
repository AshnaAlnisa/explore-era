import { WeekendGatewaysDropdown } from "./DropdownItems";
import "./dropdown.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const DropdownWeekendGateways = () => {
    const [dropdownWeekendGateways, setDropdownWeekendGateways] = useState(false);
    return (
      <>
        <ul
          className={dropdownWeekendGateways ? "nav-submenu clicked" : "nav-submenu"}
          onClick={() => setDropdownWeekendGateways(!dropdown)}
        >
          {WeekendGatewaysDropdown.map((items) => {
            return (
              <li key={items.id}>
                <Link
                  to={items.path}
                  className= {items.cName}
                  onClick={() => setDropdownWeekendGateways(false)}
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
  
  export default DropdownWeekendGateways;
  