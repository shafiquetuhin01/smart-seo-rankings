import React from 'react';

const TwitterCallUs = () => {
    return (
        <section className="py-3 text-info">
      <div className="mx-20 mt-10 pb-10">
        <p className="text-3xl my-2 text-white text-center font-bold italic">
        Struggling to <span className="text-secondary">Advertise on Twitter? </span>{" "}
        We Can Help!
        </p>
        <p className="my-4 italic text-4xl font-bold text-center text-white">
          Call us at 855-444-4777 
        </p>
        <p className="my-4 italic text-2xl text-center text-white">
        to kick-start your YouTube
          advertising campaign! 
        </p>
        <div className="text-center lg:flex justify-center mt-5">
          <button className="text-lg btn btn-accent text-white mr-4">
            start a live chat
          </button>
          <button className="text-lg btn btn-secondary text-white">
          GET A free QUOTE AND Website Audit
          </button>
        </div>
      </div>
    </section>
    );
};

export default TwitterCallUs;