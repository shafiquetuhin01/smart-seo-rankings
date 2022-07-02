import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGlobe, FaPencilAlt, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";
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
              <p className="text-[red] text-sm">
                * Your email is required.
              </p>
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
            <input
              className="outline-[1px] outline-[#F37F34] form-group w-full pl-7 py-2 border-[1px] bg-[#F6F4F4] rounded-sm mb-1"
              placeholder="Guest Blogging"
              {...register("guest", { required: true })}
            />
            {errors.guest && (
              <p className="text-[red] text-sm">
                * Your have to choose anyone from this field.
              </p>
            )}
          </div>
          
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
