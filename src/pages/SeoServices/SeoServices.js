import React from "react";
import Awards from "./Awards/Awards";
import ClientTestimonial from "./ClientTestimonial/ClientTestimonial";
import ContentDriven from "./ContentDriven/ContentDriven";
import OnPageSeo from "./OnPageSeo/OnPageSeo";
import SeoHero from "./SeoHero/SeoHero";



const SeoServices = () => {
  return (
    <>
      <SeoHero />
      <Awards />
      <ContentDriven />
      <OnPageSeo />
      <ClientTestimonial />
    </>
  );
};

export default SeoServices;
