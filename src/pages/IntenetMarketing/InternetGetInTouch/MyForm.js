import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegCommentAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const MyForm = () => {
  
  const requestSubmit = (e) =>{
    e.preventDefault();
    e.target.reset();
    navigate('/thanks');
  }
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white rounded-xl w-10/12 mx-auto p-3">
      <form onSubmit={requestSubmit}>
        <h3 className="text-[41px] leading-[3rem] py-3 text-accent font-bold text-center">
          GET FREE{" "}
          <span className="text-secondary">DIGITAL MARKETING REPORT</span>
        </h3>
        <div className="mx-7">
          <div className="mb-3 relative ">
            <FaUser className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Full Name"
             required
            />
            
          </div>
          <div className="mb-3 relative ">
            <FaEnvelope className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Email"
              required
            />
            
          </div>
          <div className="mb-3 relative ">
            <FaPhoneAlt className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Phone"
              required
            />
            
          </div>
          <div className="mb-3 relative ">
            <FaGlobe className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Website"
              required
            />
            
          </div>
          <div className="mb-3 relative ">
            <FaPencilAlt className="absolute left-2 top-3 text-secondary" />

            <select
              id="cars"
              type="text"
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Guest Blogging"
              required
            >
              <option value disabled="disabled">Inquiring About</option>
              <option className="text-[#a1a0a0]" value="SEO">SEO</option>
              <option className="text-[#a1a0a0]" value="PPC Marketing">PPC Marketing</option>
              <option className="text-[#a1a0a0]" value="Social Media Management">
                Social Media Management
              </option>
              <option className="text-[#a1a0a0]" value="Reputation Management">
                Reputation Management
              </option>
              <option className="text-[#a1a0a0]" value="Content Marketing">Content Marketing</option>
              <option className="text-[#a1a0a0]" value="Guest Blogging">Guest Blogging</option>
              <option className="text-[#a1a0a0]" value="Web Design Development">
                Web Design Development
              </option>
              <option className="text-[#a1a0a0]" value="Internet Marketing">Internet Marketing</option>
              <option className="text-[#a1a0a0]" value="Paid Marketing">Paid Marketing</option>
              <option className="text-[#a1a0a0]" value="Infographic Design Services">
                Infographic Design Services
              </option>
              <option className="text-[#a1a0a0]" value="Video Design Services">
                Video Design Services
              </option>
              <option className="text-[#a1a0a0]" value="Guest Blogging">Guest Blogging</option>
              <option className="text-[#a1a0a0]" value="Digital Marketing" selected="true">
             Digital Marketing
              </option>
              <option className="text-[#a1a0a0]" value="Other">Other</option>
            </select>
            
          </div>

          <div className="py-6 text-center mb-5 ">
            <button className="btn h-8 btn-secondary btn-wide hover:bg-[#0E1C37] hover:border-0 text-white text-xl font-bold btn-lg">
              GET STARTED{" "}
              <span className="ml-2">
                <FaPaperPlane />
              </span>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="text-xl flex items-center text-accent  font-bold  border-r-[1px] border-[#b8b5b5] mx-5 pr-5">
              <FaPhoneAlt className="text-secondary" />
              <Link
                className="text-accent ml-2 hover:underline"
                to="tel:855-444-4777"
              >
                855-444-4777
              </Link>
            </div>
            <div className="text-xl flex text-accent items-center  font-bold">
              <FaRegCommentAlt className="text-secondary" />
              <Link
                className="text-accent ml-2 hover:underline"
                to="tel:855-444-4777"
              >
                855-444-4777
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
