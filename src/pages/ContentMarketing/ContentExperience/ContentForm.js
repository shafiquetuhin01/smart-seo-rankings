import React, { useState } from "react";
import * as Icons from "react-icons/fa";
const ContentForm = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
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

  const btn = (
    <>
      <button
        onClick={() => setClose(!close)}
        className="z-40 fixed left-0 top-[50%] cursor-pointer rotate-90 btn btn-secondary text-white"
      >
        request a quote
      </button>
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
            <Icons.FaTimes
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
            <option value="Digital Marketing" select="select">
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
    <section className="w-full">
      <div>{!close ? img : freePlan}</div>
      <div className="w-10/12 mx-auto border border-secondary p-10">
        <form action="" onSubmit={formSubmit}>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="">
              <label htmlFor="name" className="text-[14px] font-bold mb-2">
                Your Full Name:
              </label>
              <input
                className="text[16px] min-w-full h-10 p-2 rounded-md border border-primary"
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="text-[14px] font-bold mb-2">
                Phone No:
              </label>
              <input
                className="text[16px] w-full h-10 p-2 rounded-md border border-primary"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone No"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="text-[14px] font-bold mb-2">
                Email Address:
              </label>
              <input
                className="text[16px] w-full h-10 p-2 rounded-md border border-primary"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-4">
            <div className="">
              <label htmlFor="category" className="text-[14px] font-bold mb-2">
                Select Category:
              </label>
              <select
                className="text[16px] w-full h-10 p-2 rounded-md border border-primary"
                type="text"
                name="category"
                id="category"
                placeholder="Content Marketing"
              >
                <option value="SEO">SEO</option>
                <option value="PPC Marketing">PPC Marketing</option>
                <option value="Social Media Management">
                  Social Media Management
                </option>
                <option value="Reputation Management">
                  Reputation Management
                </option>
                <option value="Content Marketing" selected="">
                  Content Marketing
                </option>
                <option value="Web Design Development">
                  Web Design Development
                </option>
                <option value="Internet Marketing">Internet Marketing</option>
                <option value="Paid Marketing">Paid Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="website" className="text-[14px] font-bold mb-2">
                Website:
              </label>
              <input
                className="text[16px] w-full h-10 p-2 rounded-md border border-primary"
                type="text"
                name="website"
                id="website"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="mt-5 w-full">
            <label
              htmlFor="project-details"
              className="text-[14px] font-bold mb-2"
            >
              project details:
            </label>
            <textarea
              className="text[16px] w-full h-[90px] p-2 rounded-md border border-primary"
              type="text"
              name="project-details"
              id="project-details"
              placeholder="Project Details"
            />
            <div className="w-full text-center mt-6">
              <input
                className="text-center btn-primary btn"
                value="Grow Your Business Now"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContentForm;
