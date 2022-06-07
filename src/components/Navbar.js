import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const menuItems = (
    <>
      <li>
        <Link to="/seo-services">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          SEO Services
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/paid-marketing">
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
          Paid Marketing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ul className="bg-primary">
          <li>
            <Link to="/google-ads-marketing">Google Ads Marketing</Link>
          </li>
          <li>
            <Link to="/facebook-ads">Facebook Advertising</Link>
          </li>
          <li>
            <Link to="/instagram-marketing">Instagram Marketing</Link>
          </li>
          <li>
            <Link to="/youtube-ads">Youtube Advertising</Link>
          </li>
          <li>
            <Link to="/twitter-marketing">Twitter Marketing</Link>
          </li>
          <li>
            <Link to="/linkedin-marketing">Linkedin Marketing</Link>
          </li>
          <li>
            <Link to="/pinterest-marketing">Pinterest Advertising</Link>
          </li>
          <li>
            <Link to="/amazon-marketing">Amazon Marketing</Link>
          </li>
        </ul>
      </li>
      <li tabIndex="0">
        <Link to="/content-marketing">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Content Marketing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ul className="bg-primary">
          <li>
            <Link to="/seo-content-writing">SEO Content Writing</Link>
          </li>
          <li>
            <Link to="/article-writing">Article Writing</Link>
          </li>
          <li>
            <Link to="/blog-writing">Blog Writing</Link>
          </li>
          <li>
            <Link to="/email-marketing">Email Marketing</Link>
          </li>
          <li>
            <Link to="/guest-bloging">Guest Bloging</Link>
          </li>
        </ul>
      </li>
      <li tabIndex="0">
        <Link to="/web-design">
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
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Website Design & Development
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <ul className="bg-primary">
          <li>
            <Link to="/web-design-packages">Web Design Packages</Link>
          </li>
          <li>
            <Link to="/b2b-web-design">B2B Web Design</Link>
          </li>
          <li>
            <Link to="/b2c-web-design">B2C Web Design</Link>
          </li>
          <li>
            <Link to="/ecommerce-web-design">Ecommerce Web Design</Link>
          </li>
          <li>
            <Link to="/wordpress-web-design">WordPress Web Design</Link>
          </li>
          <li>
            <Link to="/responsive-web-design">Responsive Web Design</Link>
          </li>
          <li>
            <Link to="/landing-page-design">Landing Page Design</Link>
          </li>
          <li>
            <Link to="/website-maintenance">Website Maintenance </Link>
          </li>
          <li>
            <Link to="/website-optimization">Website Optimization</Link>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div
      style={{
        backgroundColor: "#091D3F",
        color: "white",
        margin: "0",
        padding: "0",
      }}
      className="navbar"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <li className="list-none">
          <Link to="/internet-marketing" className="btn btn-ghost normal-case ">
            <Icons.FaHome className="flex items-center justify-center text-4xl text-white " />
          </Link>
        </li>
        <ul className={open ? "nav-menu menu menu-horizontal active" : "nav-menu"}>{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          onClick={handleClick}
          tabIndex="0"
          className="nav-icon btn btn-ghost lg:hidden"
        >
          {/* <svg
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
