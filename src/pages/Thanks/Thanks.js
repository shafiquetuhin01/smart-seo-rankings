import React from "react";

const Thanks = () => {
  return (
    <section
      className="w-11/12 py-5 bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('https://i.ibb.co/HDd3XB3/rfp-bg.jpg')" }}
    >
      <div className="flex justify-center items-center">
        <div className="w-8/12 ">
          
        </div>
        <div className="w-4/12 mt-[10%]">
            <h3 className="text-info font-bold text-3xl uppercase">Welcome !</h3>
            <p className="my-4">Thanks for connecting with us and requesting a quote!</p>
            <p className="my-4">We’re going to get right on that. A Search Berg representative will be sending you a proposal and an audit report within 24 hours.</p>
            <p className="my-4">If you have any further questions, do not hesitate to call us at 855-444-4777 or you could Start a Live Chat right away!</p>
            <p className="my-4">Have an awesome day!</p>
            <p className="my-4">- Team Smart SEO Rankings</p>
          </div>
      </div>
    </section>
  );
};

export default Thanks;
