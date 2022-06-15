import React from "react";
import { Link } from "react-router-dom";
const SeoProcess = () => {
  return (
    <div className="border-b border-black py-10 mb-5">
      <div className="w-10/12 mx-auto">
        <div>
          <h2 className="text-accent text-4xl font-bold text-center">
            See Our <span className="text-secondary">SEO Process!</span>
          </h2>
          <p className="text-xl text-center py-6">Below is a typical task timeline of an SEO project. For more details see our <Link to="/#" className="text-primary font-bold underline">How It Works</Link> page.</p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default SeoProcess;
