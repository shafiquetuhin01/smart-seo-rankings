import React from "react";
<<<<<<< HEAD
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
=======

const RequestForm = () => {
  return (
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            class="input input-bordered"
          />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
>>>>>>> 0ac02b72c37496099046f5db7c5e02ad291f8135
  );
};

export default RequestForm;
