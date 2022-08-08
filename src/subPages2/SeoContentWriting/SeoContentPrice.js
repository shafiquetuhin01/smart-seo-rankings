import React from "react";

const SeoContentPrice = () => {
  return (
    <div className="shadow-xl py-3">
      <div className="flex justify-between items-center border-b border-gray-300 pb-6">
        <p className="font-bold">Service Type :</p>
        <select id="select-category" className="w-8/12 p-3 border border-gray-300 form-control">
          <option value="Article Writing" selected="">
            Article Writing
          </option>
          <option value="SEO Blogs">SEO Blogs</option>
          <option value="Web Content">Web Content</option>
          <option value="Press Release">Press Release</option>
          <option value="Product Description">Product Description</option>
        </select>
      </div>
      <div className=" border-b border-gray-300 pb-6 form-control">
        <p className="mt-2">
          <span className="float-right text-white px-2 text-center text-[16px] font-bold bg-secondary ">
            1
          </span>
        </p>
        <div className="seo-content-price flex justify-between items-center font-bold">
          <p>Quantity :</p>
          <input
            type="range"
            className="w-8/12 border border-gray-300 float-right"
          />
        </div>
        <div>
          <p className="inline ml-[225px] text-info font-bold">1</p>
          <p className="inline float-right text-info font-bold">100</p>
        </div>
      </div>
      <div className=" border-b border-gray-300 pb-6 form-control">
        <p className="mt-2">
          <span className="float-right text-white px-2 text-center text-[16px] font-bold bg-secondary ">
            1500
          </span>
        </p>
        <div className="seo-content-price flex justify-between items-center font-bold">
          <p>Word Count per piece :</p>
          <input
            type="range"
            className="w-8/12 border border-gray-300 float-right"
          />
        </div>
        <div>
          <p className="inline ml-[225px] text-info font-bold">250</p>
          <p className="inline float-right text-info font-bold">4000</p>
        </div>
      </div>
      <div className="mt-5 border-b border-gray-300 pb-6 form-control">
        <div className="border-b border-gray-300 pb-2 seo-content-price flex justify-between items-center font-bold">
          <p>Turnaround Time :</p>
          <p className="w-8/12 bg-[#EAEAEA] text-center p-2">
            2 <span>Days</span>
          </p>
        </div>
        <div className="mt-3 flex items-center justify-end">
          <p className="mr-4 text-info font-bold text-right">
            Monthly Subscription :
          </p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SeoContentPrice;
