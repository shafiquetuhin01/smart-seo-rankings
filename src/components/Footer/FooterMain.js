import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const FooterMain = () => {
  return (
    <footer className="bg-[#0B2B46] min-h-screen border-t-[5px] border-[#F47A1E]">
      <div className="w-11/12 mx-auto text-white font-[500]">
        {/* footer top  */}
        <section>
            <div className="grid md:grid-cols-3 grid-cols-1 py-8 border-b border-blue-50 gap-7">
                <div className="pr-10 pb-4 border-r-[1px] border-blue-50">
                    <h2 className=" uppercase text-lg font-bold">ABOUT <span className="text-secondary">SMArt seo rankings</span></h2>
                    <p className="text-[15px] leading-[1.45] mt-4 ">Search Berg is an award-winning digital marketing firm with more than 10 years in SEO and Web Design. We specialize in growing businesses and websites online by bringing our clients more traffic, more calls and more sales.</p>
                </div>
                <div className="mx-10 pr-10 pb-4 border-r-[1px] border-blue-50">
                    <h2 className="text-secondary uppercase text-lg font-bold">contact <span className="text-white">details</span></h2>
                    <div className="mt-4 text-[15px]">
                        <p><span><FaPhoneAlt className="inline mr-3 text-secondary" /></span>855-444-4777</p>
                        <p className="mt-2"><span><FaRegEnvelope className="inline mr-3 text-secondary" /></span>Email Us</p>
                        <div className="flex justify-items-stretch mt-2">
                            <p className="mt-1"><FaMapMarkerAlt className="mr-3 text-secondary" /></p>
                            <span>244 5th Ave #200, New York, NY 10001, United States</span>
                        </div>
                        <span></span>
                    </div>
                </div>
                <div className="pr-0 pb-4">
                <h2 className="text-secondary uppercase text-lg font-bold">google map <span className="text-white">location</span></h2>
                    <img className="w-full mt-2 h-[150px]" src="https://i.ibb.co/0VjMvnD/gmap.png" alt="" />
                </div>
            </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterMain;
