import React from 'react';
import {FaPhoneAlt, FaCommentDots, FaArrowCircleLeft} from "react-icons/fa";
const WebDesignCustomQuote = () => {
    return (
        <div
      className="py-5">
      <div className="w-7/12 mx-auto">
        <h3 className="italic text-4xl text-center text-secondary font-bold py-5">
        Grow Your Business <span className='text-info'>Online With Confidence!</span>
        </h3>
        <div className="flex justify-center items-center gap-3 mb-4">
            <p className="border-r border-info hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><FaPhoneAlt className="inline mr-3"/>855-444-4777</p>
            <p className="border-r border-info hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><FaCommentDots className="inline mr-3"/>Start Live Chat</p>
            <p className="hover:underline hover:cursor-pointer hover:underline-offset-4 text-secondary px-4 text-2xl"><FaArrowCircleLeft className="inline mr-3"/>Request Quote</p>
        </div>
      </div>
    </div>
    );
};

export default WebDesignCustomQuote;