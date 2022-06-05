import React from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/seo-services">SEO Services</Link>
      </li>
      <li tabIndex="0">
        <Link to="/paid-marketing">
          Paid Marketing
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
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
            <Link to='/amazon-marketing'>Amazon Marketing</Link>
          </li>
        </ul>
      </li>
      <li tabIndex="0">
        <Link to="/content-marketing">
          Content Marketing
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
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
          Website Design & Development
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
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
            <Link to='/website-maintenance'>Website Maintenance </Link>
          </li>
          <li>
            <Link to='/website-optimization'>Website Optimization</Link>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div
      style={{ backgroundColor: "#091D3F", color: "white" }}
      className="navbar"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
