import React from "react";
import logo from "../assets/images/logo.png";

const NavbarTop = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <div className="flex justify-items-center items-center">
        <div style={{ borderRight: "1px solid #0B365B" }} className="my-2 pr-2">
          <img className="h-28 w-44" src={logo} alt="logo" />
        </div>
        <div>
          <p className="sm:text-xl ml-7 italic font-bold text-1xl text-accent">
            Empowering
          </p>
          <p className="sm:text-xl ml-7 italic font-bold text-1xl text-accent">
            Businesses Online 
          </p>
        </div>
      </div>
      <div className="grid justify-items-center items-center">
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-12 w-12 text-secondary"
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
            </svg>
          </span>
          <span className="text-3xl font-bold text-accent hover:text-secondary mx-1">
            855-444-4777
          </span>
          <div className="sm:inline">
            <button className="btn btn-primary mx-1 font-bold">
              contact us
            </button>
            <button className="btn btn-secondary font-bold text-white">
              client login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
