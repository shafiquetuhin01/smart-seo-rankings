import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <section className="py-5 w-11/12 mx-auto">
      <div className="lg:flex items-center justify-center gap-2">
        <div className="w-1/2 mx-auto">
          <div>
            <h3 className="text-info text-2xl font-bold text-left">
              Contact Us
            </h3>
            <p className="my-4 text-left">
              Fill out the form below to send us an email. You’ll get a
              guaranteed response within 24 hours!
            </p>
          </div>
         <ContactUsForm/>
        </div>
        <div className="1/2 mx-auto">
            <img src="https://i.ibb.co/4Vyh2bz/request-form-map.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
