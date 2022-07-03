import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaLinkedin, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
const FooterMain = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0B2B46] min-h-screen border-t-[5px] border-[#F47A1E]">
      <div className="w-11/12 mx-auto text-white font-[500]">
        {/* footer top  */}
        <section>
          <div className="grid md:grid-cols-3 grid-cols-1 py-8 border-b border-blue-50 gap-7">
            <div className="pr-10 pb-4 border-r-[1px] border-blue-50">
              <h2 className=" uppercase text-lg font-bold">
                ABOUT <span className="text-secondary">SMArt seo rankings</span>
              </h2>
              <p className="text-[15px] leading-[1.45] mt-4 ">
                Search Berg is an award-winning digital marketing firm with more
                than 10 years in SEO and Web Design. We specialize in growing
                businesses and websites online by bringing our clients more
                traffic, more calls and more sales.
              </p>
            </div>
            <div className="mx-10 pr-10 pb-4 border-r-[1px] border-blue-50">
              <h2 className="text-secondary uppercase text-lg font-bold">
                contact <span className="text-white">details</span>
              </h2>
              <div className="mt-4 text-[15px]">
                <p>
                  <span>
                    <FaPhoneAlt className="inline mr-3 text-secondary" />
                  </span>
                  855-444-4777
                </p>
                <p className="mt-2">
                  <span>
                    <FaRegEnvelope className="inline mr-3 text-secondary" />
                  </span>
                  Email Us
                </p>
                <div className="flex justify-items-stretch mt-2">
                  <p className="mt-1">
                    <FaMapMarkerAlt className="mr-3 text-secondary" />
                  </p>
                  <span>
                    244 5th Ave #200, New York, NY 10001, United States
                  </span>
                </div>
                <span></span>
              </div>
            </div>
            <div className="pr-0 pb-4">
              <h2 className="text-secondary uppercase text-lg font-bold">
                google map <span className="text-white">location</span>
              </h2>
              <img
                className="w-full mt-2 h-[150px]"
                src="https://i.ibb.co/0VjMvnD/gmap.png"
                alt=""
              />
            </div>
          </div>
          <section className="lg:grid lg:grid-cols-5 grid-cols-1 mt-6 py-5 border-b-[1px] border-white">
            <div className="">
              <li className="list-none ">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  SEO SERVICES
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  SEO Packages
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Small Business SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Local SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  eCommerce SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Website SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Enterprise SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Nationwide SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  International SEO
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Outsourcing SEO Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  White Label SEO Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Guaranteed SEO Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  SEO Keywords Research
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  SEO Competitor Analysis
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  SEO Audit & Assessment
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Backlink Audit
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Digital Marketing
                </Link>
              </li>
            </div>
            <div className="">
              <li className="list-none ">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  PPC SERVICES
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  White Label PPC Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  PPC Audit
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Campaign optimization
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  AdWords PPC Account Setup
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Ad copies development
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Paid Advertising
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Facebook Advertising
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Instagram Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  YouTube Advertising
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  LinkedIn Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Twitter Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Pinterest Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Yelp Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Amazon Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  eBay Marketing
                </Link>
              </li>
            </div>
            <div className="">
              <li className="list-none ">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  CONTENT MARKETING
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  SEO Content Writing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Product Descriptions
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Service Pages
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Regional Pages
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Web Copy Writing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Blog Writing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Guest Blogging
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Email Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Article Writing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Infographic Design
                </Link>
              </li>
              <li className="list-none mt-3">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  SOCIAL MEDIA SERVICES
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Influencer Marketing
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Community Management
                </Link>
              </li>
              <li className="list-none mt-3">
                <Link
                  className="hover:underline text-secondary font-bold text-[16px]"
                  to="#"
                >
                  REPUTATION MANAGEMENT
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Personal Reputation
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Business Reputation
                </Link>
              </li>
            </div>
            <div className="  ">
              <li className="list-none ">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  DESIGN & DEVELOPMENT
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  White Label Web Design Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Web Design Packages
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  B2B Web Design
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  B2C Web Design
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Ecommerce Web Design
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  WordPress Web Design
                </Link>
              </li>

              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Responsive Web Design
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Landing Pages Design
                </Link>
              </li>

              <li className="list-none mt-3">
                <Link
                  className="hover:underline text-white text-[15px]"
                  to="#"
                >
                  Website Optimization Services
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-secondary font-bold text-lg" to="#">
                  LOCAL SEO SUB SERVICES
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Local SEO
                </Link>
              </li>

              <li className="list-none ">
                <Link className="hover:underline text-secondary font-bold text-lg" to="#">
                  ABOUT
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Blog
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Client Login
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                  Contact Us
                </Link>
              </li>
            </div>
            <div className="ml-12">
              <li className="list-none ">
                <Link
                  className="hover:underline text-secondary font-bold text-lg"
                  to="#"
                >
                  INDUSTRIES
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Chiropractors
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Dentist
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Doctors
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Healthcare
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Hotels
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Lawyers
                </Link>
              </li>

              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Real Estate
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Restaurants
                </Link>
              </li>

              <li className="list-none mt-3">
                <Link
                  className="hover:underline text-white text-[15px]"
                  to="#"
                >
                  Roofers
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-secondary font-bold text-lg" to="#">
                Travel/Tourism
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                LOCATIONS
                </Link>
              </li>

              <li className="list-none ">
                <Link className="hover:underline text-secondary font-bold text-lg" to="#">
                New York
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Seattle
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                Orlando
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:underline text-white text-[15px]" to="#">
                San Diego
                </Link>
                <Link className="hover:underline text-white text-[15px]" to="#">
                Washington DC
                </Link>
              </li>
            </div>
            
          </section>
          <section>
              <div className="flex justify-between py-5">
                <h4>Copyright &copy; {thisYear} <span className="underline">Smart SEO Rankings</span>. All rights reserved. <span className="underline">Privacy Policy</span> and <span className="underline">Conditions of Use</span></h4>
                <div className="">
                  <li className="list-none flex justify-center">
                    <Link className="hover:text-secondary text-white mr-3 text-lg" to="#"><FaFacebookF/></Link>
                    <Link className="hover:text-secondary text-white mr-3 text-lg" to="#"><FaYoutube/></Link>
                    <Link className="hover:text-secondary text-white mr-3 text-lg" to="#"><FaLinkedin/></Link>
                    <Link className="hover:text-secondary text-white mr-3 text-lg" to="#"><FaPinterest/></Link>
                  </li>
                </div>
              </div>
            </section>
        </section>
      </div>
    </footer>
  );
};

export default FooterMain;
