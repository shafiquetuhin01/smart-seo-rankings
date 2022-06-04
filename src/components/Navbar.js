import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {contentDropdown, navItems, paidDropdown, webDesignDropdown} from "./NavItems";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const Links = [
    {
      icon1: (
        <ion-icon
          style={{ fontSize: "35px", fontWeight: "bold" }}
          name="home-outline"
        ></ion-icon>
      ),
      link: "/",
    },
    {
      name: "SEO services",
      icon1: <ion-icon name="search-outline"></ion-icon>,
      link: "/",
    },
    {
      name: "paid marketing",
      icon1: <ion-icon name="logo-usd"></ion-icon>,
      icon2: <ion-icon name="caret-down-outline"></ion-icon>,
      link: "/",
    },
    {
      name: "content marketing",
      icon1: <ion-icon name="document-text-outline"></ion-icon>,
      icon2: <ion-icon name="caret-down-outline"></ion-icon>,
      link: "/",
    },
    {
      name: "website design & development",
      icon1: <ion-icon name="desktop-outline"></ion-icon>,
      icon2: <ion-icon name="caret-down-outline"></ion-icon>,
      link: "/",
    },
  ];

  const [open, setOpen] = useState(false);
  
  return (
    <div className="w-full fixed">
      <div
        className="last-border md:flex items-center justify-center"
        style={{ backgroundColor: "#091D3F" }}
      >
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex last-border md:items-center md:pb-0 pb-12 absolute md:static text-white-300 md:z-auto z-[-1] left-0 w-full md:w-auto ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
                   onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
              key={link.name}
              style={{ borderRight: "1px solid white", paddingRight: "8px" }}
              className="w-58 h-20 text-right font-semibold text-white text-base py-2 hover:bg-primary capitalize"
            >
              <a
                href={link.link}
                className="flex items-center justify-center break-words"
              >
                <span className="text-3xl my-3 mx-2">{link.icon1}</span>
                <span>{link.name}</span>
                <span className="ml-3 text-3xl">{link.icon2}</span>
                {dropdown && <Dropdown />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
