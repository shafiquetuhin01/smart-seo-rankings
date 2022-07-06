import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const menuItems = (
    <>
      <li className="text-xl">
        <Link to="/">
          <Icons.FaSearch />
          SEO Services
        </Link>
      </li>
      <li className="text-xl" tabIndex="0">
        <Link to="/paid-marketing">
          <Icons.FaDollarSign />
          Paid Marketing
          <Icons.FaAngleDoubleDown/>
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
      <li className="text-xl" tabIndex="0">
        <Link to="/content-marketing">
          <Icons.FaBook/>
          Content Marketing
          <Icons.FaAngleDoubleDown/>
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
      <li className="text-xl" tabIndex="0">
        <Link to="/web-design">
        <Icons.FaDesktop/>
          Website Design & Development
          <Icons.FaAngleDoubleDown/>
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
      <div className="navbar-center hidden lg:flex z-10">
        <li className="list-none">
          <Link to="/internet-marketing">
            <Icons.FaHome className="flex items-center justify-center text-4xl text-white mr-2 " />
          </Link>
        </li>
        <ul className="menu menu-horizontal custom-ul">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          onClick={handleClick}
          tabIndex="0"
          className="nav-icon btn btn-ghost lg:hidden"
        >
          <i
            className={
              open ? "fas fa-times bg-accent p-2" : "fas fa-bars bg-accent p-2"
            }
          ></i>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
