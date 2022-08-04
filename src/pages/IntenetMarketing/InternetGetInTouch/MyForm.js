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
import { Link } from "react-router-dom";
const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen bg-white rounded-xl w-10/12 mx-auto p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <p className="text-[red] text-sm">
                * Your full name is required.
              </p>
            )}
          </div>
          <div className="mb-3 relative ">
            <FaEnvelope className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-[red] text-sm">* Your email is required.</p>
            )}
          </div>
          <div className="mb-3 relative ">
            <FaPhoneAlt className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-[red] text-sm">
                * Your phone number is required.
              </p>
            )}
          </div>
          <div className="mb-3 relative ">
            <FaGlobe className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Website"
              {...register("website", { required: true })}
            />
            {errors.website && (
              <p className="text-[red] text-sm">
                * Your website address is required.
              </p>
            )}
          </div>
          <div className="mb-3 relative ">
            <FaPencilAlt className="absolute left-2 top-3 text-secondary" />

            <select
              id="cars"
              type="text"
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Guest Blogging"
              {...register("guest", { required: true })}
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
            {errors.guest && (
              <p className="text-[red] text-sm">
                * Your have to choose anyone from this field.
              </p>
            )}
          </div>

          <div className="py-6 text-center mb-5 ">
            <button className="btn btn-secondary hover:bg-[#0E1C37] hover:border-0 text-white text-xl font-bold btn-lg">
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
