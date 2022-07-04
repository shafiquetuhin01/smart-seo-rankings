import React from "react";
import "./RequestForm.css";
const RequestForm = () => {
  return (
    <div className="request-form request-bg card w-80 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white italic">Request a Quote and !</h2>
        <h2 className="card-title text-xl text-warning italic">
          FREE SEO Audit Report
        </h2>
        <input
          type="text"
          name="name"
          className="w-full h-9 rounded p-2"
          placeholder="Your Full Name"
        />
        <input
          type="text"
          name="phone"
          className="w-full h-9 rounded p-2"
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          className="w-full h-9 rounded p-2"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="website"
          className="w-full h-9 rounded p-2"
          placeholder="Website"
        />
        <select name="seo" id="" className="text-[#9e9c9c] w-full h-9 rounded p-2"
          placeholder="SEO">
          <option value="SEO">SEO</option>
          <option value="PPC Marketing">PPC Marketing</option>
          <option value="Social Media Management">
            Social Media Management
          </option>
          <option value="Reputation Management">Reputation Management</option>
          <option value="Content Marketing">Content Marketing</option>
          <option value="Guest Blogging">Guest Blogging</option>
          <option value="Web Design Development">Web Design Development</option>
          <option value="Internet Marketing">Internet Marketing</option>
          <option value="Paid Marketing">Paid Marketing</option>
          <option value="Infographic Design Services">
            Infographic Design Services
          </option>
          <option value="Video Design Services">Video Design Services</option>
          <option value="Guest Blogging">Guest Blogging</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="Project Details"
          name="details"
          cols="30"
          className="w-full h-20 rounded p-2"
          rows="10"
        ></textarea>
        <div className="mt-3 card-actions justify-center">
          <button className="bg-gradient-to-t from-warning to-secondary btn text-black text-xl capitalize font-bold w-full h-9 btn-warning">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
