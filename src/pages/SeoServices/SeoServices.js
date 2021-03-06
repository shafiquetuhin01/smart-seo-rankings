import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Awards from "./Awards/Awards";
import CheckOut from "./CheckOut/CheckOut";
import ClientDashboard from "./ClientDashboard/ClientDashboard";
import ClientFeatured from "./ClientFeatured/ClientFeatured";
import ClientPortfolio from "./ClientPortfolio/ClientPortfolio";
import ClientTestimonial from "./ClientTestimonial/ClientTestimonial";
import ContentDriven from "./ContentDriven/ContentDriven";
import DataDriven from "./DataDriven/DataDriven";
import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";
import Milestone from "./Milestone/Milestone";
import OnPageSeo from "./OnPageSeo/OnPageSeo";
import ReviewStudies from "./ReviewStudies/ReviewStudies";
import SeoHero from "./SeoHero/SeoHero";
import SeoProcess from "./SeoProcess/SeoProcess";
import WhyChoose from "./WhyChoose/WhyChoose";

const SeoServices = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <SeoHero />
      <Awards />
      <ContentDriven />
      <OnPageSeo />
      <ClientTestimonial />
      <ReviewStudies />
      <ClientPortfolio />
      <SeoProcess />
      <FeaturedBlog />
      <CheckOut />
      <ClientFeatured />
      <Milestone />
      <ClientDashboard />
      <WhyChoose />
      <DataDriven />
    </>
  );
};

export default SeoServices;
