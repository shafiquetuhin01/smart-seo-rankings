import React from 'react';

const WhyImportant = () => {
    return (
        <section
      style={{
        backgroundImage: 'url("https://i.ibb.co/QP7VwKp/fb-section3-bg.webp")',
      }}
      className="bg-cover bg-no-repeat py-8"
    >
      <h3 className="text-white text-5xl font-bold text-center my-5">
        Why <span className="text-secondary">LinkedIn Advertising</span> Is
        Important
      </h3>
      <div className="w-11/12 lg:grid grid lg:grid-cols-4 grid-cols-1 justify-center  mx-auto gap-5 mt-10">
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/yqR831r/fb-74.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
          visitor-to-lead conversion rate is recorded from LinkedIn: three times higher than Twitter and Facebook
          </p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/WPpZbM8/fb-15.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
          of B2B marketers have a strong LinkedIn marketing strategy in place
          </p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/h1pJyCx/fb-93.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
          of all social traffic to B2B content and websites comprises LinkedIn
          </p>
        </div>
        <div className="">
          <img
            className="mx-auto"
            src="https://i.ibb.co/93s2bxK/fb-80-4.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
          of monthly users engage with LinkedIn on a regular basis
          </p>
        </div>
      </div>
    </section>
    );
};

export default WhyImportant;