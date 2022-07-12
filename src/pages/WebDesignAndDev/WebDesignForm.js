import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPaperPlane,
  FaPhoneAlt,
  FaComments,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const WebDesignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-white rounded-xl w-10/12 mx-auto p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-[36px] leading-[3rem] py-3 text-info font-bold text-center">
          GET A FREE <span className="text-secondary">CONSULTATION</span>
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
          <div className="py-6 text-center mb-5 ">
            <button className="btn btn-secondary hover:bg-[#0E1C37] hover:border-0 text-white text-lg font-bold btn-md">
              GET STARTED{" "}
              <span className="ml-2">
                <FaPaperPlane />
              </span>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center text-accent  font-bold  border-r-[1px] border-[#b8b5b5] mx-5 pr-5">
              <FaPhoneAlt className="text-secondary mr-3 text-2xl" />
              <div className="">
                <p className="text-left uppercase text-[14px]">Call Us-24/7</p>
                <Link
                  className="text-left text-[14px] text-accent hover:underline"
                  to="tel:855-444-4777"
                >
                  855-444-4777
                </Link>
              </div>
            </div>
            <div className="flex text-accent items-center  font-bold">
              <FaComments className="text-secondary mr-3 text-3xl" />
              <div className="">
                <p className="text-left uppercase text-[14px]">Discuss Now</p>
                <Link
                  className="text-left text-[14px] text-accent hover:underline"
                  to="tel:855-444-4777"
                >
                  Chat With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WebDesignForm;
