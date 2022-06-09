import React from "react";
import './RequestForm.css';
const RequestForm = () => {
  return (
    <div class="request-form request-bg card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title text-white italic">Request a Quote and !</h2>
    <h2 class="card-title text-2xl text-warning italic">FREE SEO Audit Report</h2>
    <input type="text" name="name" className="w-11/12 h-9 rounded p-2" placeholder="Your Full Name" />
    <input type="text" name="phone" className="w-11/12 h-9 rounded p-2" placeholder="Your Phone" />
    <input type="email" name="email" className="w-11/12 h-9 rounded p-2" placeholder="Your Email Address" />
    <input type="text" name="website" className="w-11/12 h-9 rounded p-2" placeholder="Your Website" />
    <textarea name="details" cols="30" className="w-11/12 h-16 rounded p-2" rows="10"></textarea>
    <div class="card-actions justify-center">
      <button class="btn text-black text-2xl capitalize font-bold w-12/12 h-10 btn-warning">Submit Request</button>
    </div>
  </div>
</div>
  );
};

export default RequestForm;
