import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentExperience from "../../pages/ContentMarketing/ContentExperience/ContentExperience";
import YouTubeSign from "../TwitterMarketing/YouTubeSign";
import YouTubeAwards from "../YoutubeAdvertising/YouTubeAwards";
import YouTubeFAQ from "../YoutubeAdvertising/YouTubeFAQ";
import YouTubeFeaturedContent from "../YoutubeAdvertising/YouTubeFeaturedContent";
import YouTubeVision from "../YoutubeAdvertising/YouTubeVision";
import LinkedinCarousel from "./LinkedinCarousel";
import LinkedinFollower from "./LinkedinFollower";
import LinkedinHero from "./LinkedinHero";
import LinkedinInvest from "./LinkedinInvest";
import LinkedinOffer from "./LinkedinOffer";
import LinkedinSponsored from "./LinkedinSponsored";
import LinkedinTransforming from "./LinkedinTransforming";
import WhyImportant from "./WhyImportant";

const LinkedinMarketing = () => {
  return (
    <section>
      <PageTitle title="Linkedin Advertising Services" />
      <LinkedinHero />
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

export default LinkedinMarketing;
