import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () =>{
    setOpen(!open);
 
  }
  
  return (
    <div className="z-30 relative border-b-[1px] border-white">
      <nav className="">
        <label
          htmlFor="btn"
          className="icon z-30 absolute top-[-160px] right-5"
        >
          {!open ? (
            <span onClick={() => handleClick()}>
              <Icons.FaBars />
            </span>
          ) : (
            <span onClick={() => handleClick()}>
              <Icons.FaTimes className="h-full" />
            </span>
          )}
        </label>
        <input className="input-box" type="checkbox" id="btn" />
        <ul className="z-10 lg:w-full text-center">
          <li className="border-l-[0]">
            <Link to="/internet-marketing">
              <Icons.FaHome className="inline text-4xl text-white mr-2 " />
            </Link>
          </li>
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
            <Link to="/ppc-marketing">
              <Icons.FaDollarSign className="inline mr-2" />
              Paid Marketing
              <Icons.FaAngleDoubleDown className="inline ml-2" />
            </Link>
            <input className="input-box" type="checkbox" id="btn-1" />
            <ul>
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
          <li className="">
            <label htmlFor="btn-3" className="show">
              Web Design & Development +
            </label>
            <Link to="/web-design">
              <Icons.FaDesktop className="inline mr-2" />
              Website Design & Development
              <Icons.FaAngleDoubleDown className="inline ml-2" />
            </Link>
            <input className="input-box" type="checkbox" id="btn-3" />
            <ul>
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
