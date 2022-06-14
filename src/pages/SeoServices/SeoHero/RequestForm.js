import React from "react";
import './RequestForm.css';
const RequestForm = () => {
  return (
    <div className="request-form request-bg card w-80 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white italic">Request a Quote and !</h2>
    <h2 className="card-title text-xl text-warning italic">FREE SEO Audit Report</h2>
    <input type="text" name="name" className="w-full h-9 rounded p-2" placeholder="Your Full Name" />
    <input type="text" name="phone" className="w-full h-9 rounded p-2" placeholder="Your Phone" />
    <input type="email" name="email" className="w-full h-9 rounded p-2" placeholder="Your Email Address" />
    <input type="text" name="website" className="w-full h-9 rounded p-2" placeholder="Your Website" />
    <textarea placeholder="Project Details" name="details" cols="30" className="w-full h-20 rounded p-2" rows="10"></textarea>
    <div className="mt-3 card-actions justify-center">
      <button className="bg-gradient-to-t from-warning to-secondary btn text-black text-xl capitalize font-bold w-full h-9 btn-warning">Submit Request</button>
    </div>
  </div>
</div>
  );
};

export default RequestForm;
