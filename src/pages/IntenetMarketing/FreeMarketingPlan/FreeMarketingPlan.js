import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FreeMarketingPlan = () => {
  const [close, setClose] = useState(false);
  const handleClick = () =>{

  }
  return (
    <section
      className="hide-free-items w-72 h-96 border-[1px] border-t-[#F37F34] border-r-[#F37F34] pt-2 px-2"
      style={{
        backgroundImage: 'url("https://i.ibb.co/1q9bfvX/form-sec-bg.png")',
      }}
    >
      <div>
        <div className=" flex italic text-center bg-secondary p-2 ">
          <h3 className="text-white text-xl ">
            Get a Free Marketing Plan and Quote!
          </h3>
          {close ? (
            <img
              src="https://i.ibb.co/KXsgMC5/get-free-marketing-plan.webp"
              alt=""
            />
          ) : (
            <FaTimes onClick={handleClick} className=" bg-blue-600 p-1 text-2xl hover:text-red-600 hover:bg-white cursor-pointer ml-1 text-white font-bold" />
          )}
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
          <option value="Web Design Development">Web Design Development</option>
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
  );
};

export default FreeMarketingPlan;
