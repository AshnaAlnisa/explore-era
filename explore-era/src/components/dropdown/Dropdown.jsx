import { DestinationsDropdown } from "./DropdownItems";
import "./dropdown.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "nav-submenu clicked" : "nav-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {DestinationsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className= {item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;