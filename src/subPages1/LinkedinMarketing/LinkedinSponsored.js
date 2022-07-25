import React from "react";

const LinkedinSponsored = () => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <div>
        <h3 className="text-4xl text-center text-info font-bold py-5">Types of <span className="text-secondary">Linkedin</span> Sponsored Ads</h3>
        <p className="text-lg text-center py-4">Thinking of investing in LinkedIn paid advertising? Here are some options!</p>
      </div>
      <div className="lg:grid grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-6">
        <div>
            <h3 className="text-center text-info my-2 text-3xl font-bold">Ads to Prompt a Visit</h3>
            <img className="mx-auto" src="https://i.ibb.co/fSqR0hg/ad-1.jpg" alt="" />
        </div>
        <div>
            <h3 className="text-center text-info my-2 text-3xl font-bold">Ads to Increase Reach</h3>
            <img className="mx-auto" src="https://i.ibb.co/fSqR0hg/ad-1.jpg" alt="" />
        </div>
        <div>
            <h3 className="text-center text-info my-2 text-3xl font-bold">Ads to Prompt a Conversion</h3>
            <img className="mx-auto" src="https://i.ibb.co/fSqR0hg/ad-1.jpg" alt="" />
        </div>
        <div>
            <h3 className="text-center text-info my-2 text-3xl font-bold">Ads for Engagement</h3>
            <img className="mx-auto" src="https://i.ibb.co/fSqR0hg/ad-1.jpg" alt="" />
        </div>
        <div>
            <h3 className="text-center text-info my-2 text-3xl font-bold">Display Ads</h3>
            <img className="mx-auto" src="https://i.ibb.co/fSqR0hg/ad-1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default LinkedinSponsored;
