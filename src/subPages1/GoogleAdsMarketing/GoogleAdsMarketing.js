import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import HelpedClient from "../../pages/PaidMarketing/HelpedClient/HelpedClient";
import PaidAnalytics from "../../pages/PaidMarketing/PaidAnalytics/PaidAnalytics";
import PaidCarousel from "../../pages/PaidMarketing/PaidCarousel/PaidCarousel";
import PaidHero from "../../pages/PaidMarketing/PaidHero/PaidHero";
import PaidHire from "../../pages/PaidMarketing/PaidHire/PaidHire";
import PaidOptimization from "../../pages/PaidMarketing/PaidOptimization/PaidOptimization";
import PaidWhyChoose from "../../pages/PaidMarketing/PaidWhyChoose/PaidWhyChoose";
import PPCStrategy from "../../pages/PaidMarketing/PPCStrategy/PPCStrategy";
import Awards from "../../pages/SeoServices/Awards/Awards";

const GoogleAdsMarketing = () => {
  return (
    <div>
      <PageTitle title="Google Ads Marketing"></PageTitle>
      <PaidHero />
      <Awards />
      <PPCStrategy />
      <PaidCarousel />
      <HelpedClient />
      <PaidWhyChoose />
      <PaidOptimization />
      <PaidAnalytics />
      <PaidHire />
    </div>
  );
};

export default GoogleAdsMarketing;
