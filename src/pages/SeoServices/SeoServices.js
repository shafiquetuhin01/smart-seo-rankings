import React from "react";
import Awards from "./Awards/Awards";
import ClientPortfolio from "./ClientPortfolio/ClientPortfolio";
import ClientTestimonial from "./ClientTestimonial/ClientTestimonial";
import ContentDriven from "./ContentDriven/ContentDriven";
import OnPageSeo from "./OnPageSeo/OnPageSeo";
import ReviewStudies from "./ReviewStudies/ReviewStudies";
import SeoHero from "./SeoHero/SeoHero";
import SeoProcess from "./SeoProcess/SeoProcess";



const SeoServices = () => {
  return (
    <>
      <SeoHero />
      <Awards />
      <ContentDriven />
      <OnPageSeo />
      <ClientTestimonial />
      <ReviewStudies />
      <ClientPortfolio />
      <SeoProcess />
    </>
  );
};

export default SeoServices;
