import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentExperience from "../../pages/ContentMarketing/ContentExperience/ContentExperience";
import LinkedinCarousel from "../LinkedinMarketing/LinkedinCarousel";
import LinkedinFollower from "../LinkedinMarketing/LinkedinFollower";
import LinkedinHero from "../LinkedinMarketing/LinkedinHero";
import LinkedinInvest from "../LinkedinMarketing/LinkedinInvest";
import LinkedinOffer from "../LinkedinMarketing/LinkedinOffer";
import LinkedinSponsored from "../LinkedinMarketing/LinkedinSponsored";
import LinkedinTransforming from "../LinkedinMarketing/LinkedinTransforming";
import WhyImportant from "../LinkedinMarketing/WhyImportant";
import YouTubeSign from "../TwitterMarketing/YouTubeSign";
import YouTubeAwards from "../YoutubeAdvertising/YouTubeAwards";
import YouTubeFAQ from "../YoutubeAdvertising/YouTubeFAQ";
import YouTubeFeaturedContent from "../YoutubeAdvertising/YouTubeFeaturedContent";
import YouTubeVision from "../YoutubeAdvertising/YouTubeVision";
import PinterestHero from "./PinterestHero";

const PinterestMarketing = () => {
  return (
    <section>
      <PageTitle title="Pinterest Marketing" />
      <PinterestHero />
      <YouTubeAwards />
      <LinkedinFollower />
      <WhyImportant />
      <LinkedinOffer />
      <LinkedinTransforming />
      <LinkedinSponsored />
      <LinkedinInvest />
      <LinkedinCarousel />
      <YouTubeFeaturedContent />
      <YouTubeFAQ />
      <YouTubeSign />
      <YouTubeVision />
      <ContentExperience />
    </section>
  );
};

export default PinterestMarketing;
