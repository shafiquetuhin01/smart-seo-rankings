import React from "react";
import logo from "../assets/images/logo.png";

const NavbarTop = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-items-center items-center">
        <div className="border-r-2 my-4">
          <img className="h-28 w-48" src={logo} alt="logo" />
        </div>
        <div>
          <p className="">Empowering</p>
          <p className="">Businesses Online</p>
        </div>
      </div>
      <div>
        <div>
          <span><svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg></span>
          <span>855-444-4777</span>
          <button className="btn btn-primary">contact us</button>
          <button className="btn btn-secondary">client login</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
