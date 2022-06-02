import React, { useState } from "react";
const Navbar = () => {
  const Links = [
    {
      icon1: <ion-icon name="home-outline"></ion-icon>,
      link: "/home",
    },
    {
      name: "seo service",
      icon1: <ion-icon name="search-outline"></ion-icon>,
      link: "/",
    },
    { name: "paid marketing", icon1:<ion-icon name="logo-usd"></ion-icon>,icon2: <ion-icon name="caret-down-outline"></ion-icon>, link: "/" },
    { name: "content marketing", icon1:<ion-icon name="document-text-outline"></ion-icon> , icon2: <ion-icon name="caret-down-outline"></ion-icon>, link: "/" },
    { name: "website design & development",icon1:<ion-icon name="desktop-outline"></ion-icon> , icon2: <ion-icon name="caret-down-outline"></ion-icon>, link: "/" },
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
                {link.icon1}
                {link.name}
                {link.icon2}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
