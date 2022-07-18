import React from "react";
import "./WebDesignPackages.css";
import { FaComments, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const WebDesignPackages = () => {
  return (
    <section className="py-8">
      <div>
        <h3 className="text-5xl text-info text-center font-bold">
          Packages That Meet <span className="text-secondary">Your Needs</span>
        </h3>
        <p className="text-info text-center text-sm py-6 font-bold">
          We make sure to provide you with unique, purposeful, effective and
          affordable Website Design & Development <br />
          Packages with full exclusive customization to cater to your specific
          needs.
        </p>
        <div className=" text-center">
          <button className="mr-3 hover:btn-secondary btn btn-info w-[180px] rounded-none px-15 ">
            Basic
          </button>
          <button className="btn hover:btn-info btn-secondary w-[180px] text-white rounded-none px-15 ">
            Ecommerce
          </button>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:grid grid lg:grid-cols-3 grid-cols-1">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src="https://i.ibb.co/b5pkWXv/basic-icon.webp" alt="" />
              </div>
              <div className=" border-r-2 pr-3 border-[#c5cccf]">
                <h3 className="text-info text-2xl font-bold">TEMPLATED</h3>
                <p className="text-[16px] text-[#74858d] font-bold leading-4">
                  Great for Individuals <br /> & Startups!
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[16px] line-through font-extrabold text-[#999]">
                  $599
                </p>
                <p className="text-[16px] font-extrabold text-[#999]">
                  50% Off!
                </p>
                <p className="text-info font-bold text-[30px]">
                  <sup>$</sup>299
                </p>
              </div>
            </div>
            <div className="h-[200px] overflow-auto relative web-overflow border-b border-black ">
              <ul className="for-li absolute mb-4">
                <li>2 Page Website</li>
                <li>Theme Based Design</li>
                <li>Stock Photography</li>
                <li>Responsive Design</li>
                <li>Turnaround 3 Days</li>
                <li>Social Media Integration</li>
                <li>Contact Forms Included</li>
                <li>Content Not Included!</li>
                <li>2 Sets of Revisions</li>
                <li>2 Sets of Revisions</li>
                <li>2 Sets of Revisions</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="rounded-none mt-5 text-white hover:btn-info btn btn-secondary">
                Order now
              </button>
            </div>
            <div>
              <div className="flex justify-center mt-3">
                <div className="flex items-center text-accent  font-bold  border-r-[1px] border-[#b8b5b5] mx-5 pr-5">
                  <FaPhoneAlt className="text-secondary mr-3 text-2xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Call Us-24/7
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      855-444-4777
                    </Link>
                  </div>
                </div>
                <div className="flex text-accent items-center  font-bold">
                  <FaComments className="text-secondary mr-3 text-3xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Discuss Now
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      Chat With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src="https://i.ibb.co/b5pkWXv/basic-icon.webp" alt="" />
              </div>
              <div className=" border-r-2 pr-3 border-[#c5cccf]">
                <h3 className="text-info text-2xl font-bold">STANDARD</h3>
                <p className="text-[16px] text-[#74858d] font-bold leading-4">
                  Most Popular by New <br /> Businesses!
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[16px] line-through font-extrabold text-[#999]">
                  $999
                </p>
                <p className="text-[16px] font-extrabold text-[#999]">
                  50% Off!
                </p>
                <p className="text-info font-bold text-[30px]">
                  <sup>$</sup>599
                </p>
              </div>
            </div>
            <div className="h-[200px] overflow-auto relative web-overflow border-b border-black ">
            <ul className="for-li absolute mb-4">
                <li>3 Page Website</li>
                <li>Theme Based Design</li>
                <li>Stock Photography</li>
                <li>Original Content</li>
                <li>Turnaround 4 Days</li>
                <li>Responsive Design</li>
                <li>Content Management System</li>
                <li>Social Media Integration</li>
                <li>Blog Setup</li>
                <li>Contact Forms Included</li>
                <li>2 Sets of Revisions</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="rounded-none mt-5 text-white hover:btn-info btn btn-secondary">
                Order now
              </button>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex items-center text-accent  font-bold  border-r-[1px] border-[#b8b5b5] mx-5 pr-5">
                  <FaPhoneAlt className="text-secondary mr-3 text-2xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Call Us-24/7
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      855-444-4777
                    </Link>
                  </div>
                </div>
                <div className="flex text-accent items-center  font-bold">
                  <FaComments className="text-secondary mr-3 text-3xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Discuss Now
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      Chat With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src="https://i.ibb.co/b5pkWXv/basic-icon.webp" alt="" />
              </div>
              <div className=" border-r-2 pr-3 border-[#c5cccf]">
                <h3 className="text-info text-2xl font-bold">PROFESSIONAL</h3>
                <p className="text-[16px] text-[#74858d] font-bold leading-4">
                  Great for Small
                  <br /> Businesses!
                </p>
              </div>
              <div className="mt-3 mb-1">
                <p className="text-[16px] line-through font-extrabold text-[#999]">
                  $1999
                </p>
                <p className="text-[12px] font-extrabold text-[#999]">
                  50% Off!
                </p>
                <p className="text-info font-bold text-[30px]">
                  <sup>$</sup>999
                </p>
              </div>
            </div>
            <div className="h-[200px] overflow-auto relative web-overflow border-b border-black ">
            <ul className="for-li absolute mb-4">
                <li>6 Page Website</li>
                <li>Custom Design</li>
                <li>Stock Photography</li>
                <li>Original Content</li>
                <li>Turnaround 7 Days</li>
                <li>Responsive Design</li>
                <li>Content Management System</li>
                <li>Sliders</li>
                <li>Social Media Integration</li>
                <li>SEO Features</li>
                <li>Blog Setup</li>
                <li>Contact Forms Included</li>
                <li>2 Sets of Revisions</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="rounded-none mt-5 text-white hover:btn-info btn btn-secondary">
                Order now
              </button>
            </div>
            <div>
              <div className="flex justify-center mt-3">
                <div className="flex items-center text-accent  font-bold  border-r-[1px] border-[#b8b5b5] mx-5 pr-5">
                  <FaPhoneAlt className="text-secondary mr-3 text-2xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Call Us-24/7
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      855-444-4777
                    </Link>
                  </div>
                </div>
                <div className="flex text-accent items-center  font-bold">
                  <FaComments className="text-secondary mr-3 text-3xl" />
                  <div className="">
                    <p className="text-left uppercase text-[14px]">
                      Discuss Now
                    </p>
                    <Link
                      className="text-left text-[14px] text-accent hover:underline"
                      to="tel:855-444-4777"
                    >
                      Chat With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignPackages;
