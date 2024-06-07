import { PackagesDropdown } from "./DropdownItems";
import "./dropdown.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const DropdownPackages = () => {
    const [dropdownPackages, setDropdownPackages] = useState(false);
    return (
      <>
        <ul
          className={dropdownPackages ? "nav-submenu clicked" : "nav-submenu"}
          onClick={() => setDropdownPackages(!dropdown)}
        >
          {PackagesDropdown.map((items) => {
            return (
              <li key={items.id}>
                <Link
                  to={items.path}
                  className= {items.cName}
                  onClick={() => setDropdownPackages(false)}
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
  
  export default DropdownPackages;
  