import React from "react";
import ContentForm from "./ContentForm";

const ContentExperience = () => {
  return (
    <section
      className="w-full mx-auto pb-6 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('https://i.ibb.co/f8GQFKG/form-bg.jpg')" }}
    >
      <div>
        <div className=" angle-item bg-primary w-7/12  p-3">
          <h3 className="text-[48px] font-bold text-center text-white italic">
            Request a Quote now
          </h3>
        </div>
        <div className="w-7/12 mx-auto mt-6">
          <p className="text-3xl text-info text-center font-bold">
            10+ Years of Experience in SEO and Web Design 40,000+ Projects
            Completed
          </p>
          <p className="text-3xl text-info text-center font-bold">
            Award-Winning Digital Marketing Agency 100,000+ Leads Generated
          </p>
          <p className="text-[44px] my-2 text-secondary text-center font-bold italic">
          Become part of our success story!
          </p>
        </div>
        
      </div>
      <ContentForm/>
    </section>
  );
};

export default ContentExperience;
