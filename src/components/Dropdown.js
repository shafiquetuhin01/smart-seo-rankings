import React, { useState } from "react";
import { contentDropdown, paidDropdown, webDesignDropdown } from "./NavItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "text-black text-4xl " : "text-3xl text-secondary hidden"}
        onClick={() => setDropdown(!dropdown)}
      >
        {(contentDropdown,paidDropdown,webDesignDropdown).map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} 
              onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
