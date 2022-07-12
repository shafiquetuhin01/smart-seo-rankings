import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import CheckOut from "../SeoServices/CheckOut/CheckOut";
import ClientFeatured from "../SeoServices/ClientFeatured/ClientFeatured";
import ClientPortfolio from "../SeoServices/ClientPortfolio/ClientPortfolio";
import ReviewWidget from "../SeoServices/ClientTestimonial/ReviewWidget";
import TestimonialCarousel from "../SeoServices/ClientTestimonial/TestimonialCarousel";
import ContentCheckOut from "./ContentCheckOut";
import ContentExperience from "./ContentExperience/ContentExperience";
import ContentAward from "./ContentHero/ContentAward";
import ContentHero from "./ContentHero/ContentHero";
import OurContent from "./ContentHero/OurContent";
import ContentTraffic from "./ContentTraffic";
import ContentTrafic from "./ContentTraffic";
import CustomQuote from "./CustomQuote";

const ContentMarketing = () => {
  return (
    <>
      <PageTitle title="Content Marketing Services" />
      <ContentHero />
      <ContentAward />
      <OurContent />
      <TestimonialCarousel />
      <ReviewWidget />
      <CustomQuote />
      <ClientPortfolio />
      <ClientFeatured />
      <ContentCheckOut/>
      <ContentTraffic/>
      <ContentExperience/>
    </>
  );
};

export default ContentMarketing;
