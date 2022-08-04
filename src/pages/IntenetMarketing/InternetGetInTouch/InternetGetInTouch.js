import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import MyForm from "./MyForm";

const InternetGetInTouch = () => {
  const [close, setClose] = useState(false);
  const img = (
    <>
      <img
        onClick={() => setClose(!close)}
        className="z-40 fixed left-0 top-[50%] cursor-pointer"
        src="https://i.ibb.co/KXsgMC5/get-free-marketing-plan.webp"
        alt="free plan img"
      />
    </>
  );

  const freePlan = (
    <>
      <section
        className="z-50 fixed bottom-0 left-0 w-72 h-96 border-[1px] border-t-[#F37F34] border-r-[#F37F34] pt-2 px-2"
        style={{
          backgroundImage: 'url("https://i.ibb.co/1q9bfvX/form-sec-bg.png")',
        }}
      >
        <div>
          <div className=" flex italic text-center bg-secondary p-2 ">
            <h3 className="text-white text-xl ">
              Get a Free Marketing Plan and Quote!
            </h3>
            <FaTimes
              onClick={() => setClose(!close)}
              className=" bg-blue-600 p-1 text-2xl hover:text-red-600 hover:bg-white cursor-pointer ml-1 text-white font-bold"
            />
          </div>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full my-1 p-2 border-[1px] border-[blue]"
          />
          <input
            type="text"
            placeholder="Phone No"
            className="w-full mb-1 p-2 border-[1px] border-[blue]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-1 p-2 border-[1px] border-[blue]"
          />
          <select
            placeholder="Social Media Management"
            className="text-[#818080] border-[1px] border-[blue] w-full p-2 mb-1"
            name="free-seo"
            id="free"
          >
            <option value="Digital Marketing" selected="selected">
              Digital Marketing
            </option>
            <option value="SEO">SEO</option>
            <option value="PPC Marketing">PPC Marketing</option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="Reputation Management">Reputation Management</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Web Design Development">
              Web Design Development
            </option>
            <option value="Internet Marketing">Internet Marketing</option>
            <option value="Paid Marketing">Paid Marketing</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Website"
            className="w-full mb-1 p-2 border-[1px] border-[blue]"
          />
          <textarea
            name="textarea"
            id=""
            cols="10"
            className="border-[1px] border-[blue] p-2 w-full"
            placeholder="Project Details"
            rows="5"
          ></textarea>
        </div>
      </section>
    </>
  );

  return (
    <section
      className="min-h-screen"
      style={{ backgroundImage: 'url("https://i.ibb.co/rQnF2h7/1.webp")' }}
    >
      <div className="w-11/12 mx-auto py-6 lg:flex justify-center items-center">
        <div className="w-full lg:w-6/12 mx-auto">
          <h4 className="text-3xl lg:text-[52px] py-5 text-white text-center lg:text-left font-bold lg:leading-[3.5rem]">
            Get in touch with us to get a{" "}
            <span className="text-secondary">
              free 30-minute no-obligation consultation
            </span>{" "}
            with one of our experts.
          </h4>

          <div className="lg:grid lg:grid-cols-2 gap-5 place-items-center pb-8 items-center text-white">
            <div className="text-center px-8 sm:py-3">
              <h3 className="text-[56px] text-secondary font-bold">
                2 Million+
              </h3>
              <p className="text-center font-bold text-[25px]">
                Genuine Leads Generated
              </p>
            </div>
            <div className="text-center px-8 sm:py-3 ">
              <h3 className="text-[56px] text-secondary font-bold">
                1 Million+
              </h3>
              <p className="text-center font-bold text-[25px]">
                Phone Calls Generated
              </p>
            </div>
            <div className="text-center px-8 sm:py-3 ">
              <h3 className="text-[56px] text-secondary font-bold">40,000+</h3>
              <p className="text-center font-bold text-[25px]">
                Projects Completed Successfully
              </p>
            </div>
            <div className="text-center px-8 sm:py-3 ">
              <h3 className="text-[56px] text-secondary font-bold">10+</h3>
              <p className="text-center font-bold text-[25px]">
                Years in Digital Marketing
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <MyForm />
        </div>
      </div>
      <div>{!close ? img : freePlan}</div>
    </section>
  );
};

export default InternetGetInTouch;
