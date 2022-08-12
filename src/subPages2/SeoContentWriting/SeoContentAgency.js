import React from "react";

const SeoContentAgency = () => {
  return (
    <section className="w-10/12 mx-auto py-6">
      <div className="lg:flex justify-center items-center">
        <div className="w-5/12">
          <div>
            <h3 className="text-info text-3xl font-bold">
              Give Your Agency A Shot Of Adrenaline With{" "}
              <span className="text-secondary">Scalable SEO Content</span>
            </h3>
            <p className="text-info">
              Unleash our team of trained, in-house writers on your projects for
              your scalable content needs.
            </p>
            <p className="w-[200px] border-4 border-secondary my-3 mb-10 "></p>
          </div>
          <div className="grid grid-cols-2 justify-items-start gap-5">
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/n8ySY4n/dam-icon.webp" alt="" />
              <div className="font-bold">
                <p>Dedicated Account</p>
                <p>Manager</p>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/RH2G8mD/dpm-icon.webp" alt="" />
              <div className="font-bold text-sm">
                <p>Dedicated Project</p>
                <p>Manager</p>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/dP3FCZH/ype-icon.webp" alt="" />
              <div className="font-bold text-sm">
                <p>Your Pick of Editors</p>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/0Vt6pwY/bod-icon.webp" alt="" />
              <div className="font-bold text-sm">
                <p>Bulk Order Discounts</p>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/wM9QGPk/support-icon.webp" alt="" />
              <div className="font-bold text-sm">
                <p>Round the Clock support (yes, literally!)</p>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <img src="https://i.ibb.co/XFjBn6F/revision-icon.webp" alt="" />
              <div className="font-bold text-sm">
                <p>Fast and Easy Revisions Process</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="text-white fob text-lg w-[50%] btn btn-secondary hover:btn-info">get a quote</button>
          </div>
        </div>
        <div className="w-7/12">
            <img src="https://i.ibb.co/L6hjMYC/agency-man.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SeoContentAgency;
