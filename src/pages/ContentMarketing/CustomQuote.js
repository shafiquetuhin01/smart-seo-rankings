import React from "react";
import * as Icons from "react-icons/fa";
const CustomQuote = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundImage: 'url("https://i.ibb.co/LCJyGq5/1.webp")' }}
    >
      <div className="w-7/12 mx-auto">
        <h3 className="text-4xl text-center text-white font-bold py-5">
          Connect With Us To Get A Custom Quote For Your Content Marketing
          Project Today!
        </h3>
        <div className="flex justify-center items-center gap-3 mb-4">
            <p className="border-r border-white hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><Icons.FaPhoneAlt className="inline mr-3"/>855-444-4777</p>
            <p className="border-r border-white hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><Icons.FaCommentDots className="inline mr-3"/>Start Live Chat</p>
            <p className="hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><Icons.FaArrowCircleLeft className="inline mr-3"/>Request Quote</p>
        </div>
      </div>
    </div>
  );
};

export default CustomQuote;
