import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-30 relative">
      <nav className="">
        <label
          htmlFor="btn"
          className="icon z-30 absolute top-[-160px] right-5"
        >
          {!open ? (
            <span onClick={() => setOpen(!open)}>
              <Icons.FaBars />
            </span>
          ) : (
            <span onClick={() => setOpen(!open)}>
              <Icons.FaTimes />
            </span>
          )}
        </label>
        <input className="input-box" type="checkbox" id="btn" />
        <ul className="z-10 m-0">
          <li className="">
            <Link to="/">
              <Icons.FaSearch className="inline mr-2" />
              SEO Services
            </Link>
          </li>
          <li className="">
            <label htmlFor="btn-1" className="show">
              Paid Marketing +
            </label>
            <Link to="/paid-marketing">
              <Icons.FaDollarSign className="inline mr-2" />
              Paid Marketing
              <Icons.FaAngleDoubleDown className="inline ml-2" />
            </Link>
            <input className="input-box" type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link to="#">Google Ads Marketing</Link>
              </li>
              <li>
                <Link to="#">Facebook Marketing</Link>
              </li>
              <li>
                <Link to="#">Instagram Marketing</Link>
              </li>
            </ul>
          </li>
          <li className="">
            <label htmlFor="btn-2" className="show">
              Content Marketing +
            </label>
            <Link to="/content-marketing">
              <Icons.FaBook className="inline mr-2" />
              Content Marketing
              <Icons.FaAngleDoubleDown className="inline ml-2" />
            </Link>
            <input className="input-box" type="checkbox" id="btn-2" />
            <ul>
              <li>
                <Link to="#">SEO Content Writing</Link>
              </li>
              <li>
                <Link to="#">Blog Writing</Link>
              </li>
              <li>
                <Link to="#">Article Writing</Link>
              </li>
            </ul>
          </li>
          <li className="">
            <label htmlFor="btn-3" className="show">
              Web Design & Development +
            </label>
            <Link to="/web-design">
              <Icons.FaDesktop className="inline mr-2"/>
              Website Design & Development
              <Icons.FaAngleDoubleDown className="inline ml-2"/>
            </Link>
            <input className="input-box" type="checkbox" id="btn-3" />
            <ul>
              <li>
                <Link to="#">Web Design Packages</Link>
              </li>
              <li>
                <Link to="#">B2B Web Design</Link>
              </li>
              <li>
                <Link to="#">B2C Web Design</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
