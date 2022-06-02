import React, { useState } from "react";
const Navbar = () => {
  const Links = [
    {
      name: "home",
      icon1: <ion-icon name="home-outline"></ion-icon>,
      icon2: <ion-icon name="search-outline"></ion-icon>,
      link: "/home",
    },
    { name: "seo service", link: "/" },
    { name: "paid marketing", link: "/" },
    { name: "content marketing", link: "/" },
    { name: "website design & development", link: "/" },
  ];
  const Icons = [
    { homeIcon: <ion-icon name="home-outline"></ion-icon> },
    { searchIcon: <ion-icon name="search-outline"></ion-icon> },
    {
      dollarIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    { noteIcon: <ion-icon name="document-text-outline"></ion-icon> },
    { arrowIcon: <ion-icon name="caret-down-outline"></ion-icon> },
    { pcIcon: <ion-icon name="desktop-outline"></ion-icon> },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed">
      <div
        className="md:flex items-center justify-center"
        style={{ backgroundColor: "#091D3F" }}
      >
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white-300 md:z-auto z-[-1] left-0 w-full md:w-auto ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              style={{ borderRight: "1px solid white", paddingRight: "8px" }}
              className="w-48 h-20 text-right font-semibold text-white text-base py-3 hover:bg-primary capitalize"
            >
              <a href={link.link} className="break-words align-middle">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
