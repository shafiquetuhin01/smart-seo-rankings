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
const ArticleWritingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-[#F3F7FA] relative rounded-xl w-9/12 mx-auto p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-[22px] leading-[2rem] py-3 text-accent font-bold text-center">
          GET A FREE 30-MINUTE
          <span className="text-secondary"> STRATEGY CONSULTATION</span>
        </h3>
        <p className="w-[50%] absolute top-0 left-[25%] border-[3px] border-secondary mb-10 "></p>
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
          <div className="mb-1 relative ">
            <FaGlobe className="absolute left-2 top-3 text-secondary" />
            <textarea
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1" rows="4"              placeholder="Project Details"
              {...register("project", { required: true })}
            />
            {errors.project && (
              <p className="text-[red] text-sm">
                * Your project details is required.
              </p>
            )}
          </div>
          <div className="py-6 text-center">
            <button className="btn btn-secondary hover:bg-[#0E1C37] hover:border-0 text-white text-lg font-bold btn-md">
              Schedule Now
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

export default ArticleWritingForm;
