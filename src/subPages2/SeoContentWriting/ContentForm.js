import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
  FaFileAlt
} from "react-icons/fa";
const ContentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="request-form card w-80 bg-white text-neutral-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-[23px] leading-[3rem] py-3 text-info font-bold text-center">
        Request a Free Proposal
        </h3>
        <div className="">
          <div className="my-5 relative ">
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
          <div className="my-5 relative ">
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
          <div className="my-5 relative ">
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
          <div className="my-5 relative ">
            <FaFileAlt className="absolute left-2 top-3 text-secondary" />
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Project Details"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-[red] text-sm">
                * Your phone number is required.
              </p>
            )}
          </div>
          <div className="py-6 text-center mb-5 ">
            <button className="btn btn-secondary btn-sm rounded-lg w-72 hover:bg-[#0E1C37] hover:border-0 text-white text-lg font-bold btn-md">
              CLAIM NOW{" "}
              <span className="ml-2">
                <FaPaperPlane />
              </span>
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default ContentForm;
