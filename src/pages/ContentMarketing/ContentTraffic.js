import React from 'react';
import * as Icons from "react-icons/fa";
const ContentTraffic = () => {
    return (
        <div
      className="py-5"
      style={{ backgroundImage: 'url("https://i.ibb.co/LCJyGq5/1.webp")' }}
    >
      <div className="w-7/12 mx-auto">
        <h3 className="italic text-4xl text-center text-secondary font-bold py-5">
        Generate Traffic <span className='text-white'>with Content.</span> Gain Leads.
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

export default ContentTraffic;