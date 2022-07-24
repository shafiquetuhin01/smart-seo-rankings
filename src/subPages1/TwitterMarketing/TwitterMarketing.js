import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContentExperience from '../../pages/ContentMarketing/ContentExperience/ContentExperience';
import ClientTestimonial from '../../pages/SeoServices/ClientTestimonial/ClientTestimonial';
import YouTubeAwards from '../YoutubeAdvertising/YouTubeAwards';
import YouTubeFAQ from '../YoutubeAdvertising/YouTubeFAQ';
import YouTubeFeaturedContent from '../YoutubeAdvertising/YouTubeFeaturedContent';
import YouTubeTestimonial from '../YoutubeAdvertising/YouTubeTestimonial';
import YouTubeVision from '../YoutubeAdvertising/YouTubeVision';
import TwitterCarousel from './TwitterCarousel';
import TwitterFollower from './TwitterFollower';
import TwitterHero from './TwitterHero';
import TwitterInvest from './TwitterInvest';
import TwitterTypesOf from './TwitterTypesOf';
import WhyTwitterImportant from './WhyTwitterImportant';
import WhyTwitterOffer from './WhyTwitterOffer';
import YouTubeSign from './YouTubeSign';

const TwitterMarketing = () => {
    return (
        <section>
            <PageTitle title="Twitter Marketing"/>
            <TwitterHero/>
            <YouTubeAwards/>
            <TwitterFollower/>
            <WhyTwitterImportant/>
            <WhyTwitterOffer/>
            <TwitterCarousel/>
            <TwitterTypesOf/>
            <TwitterInvest/>
            <YouTubeTestimonial/>
            <YouTubeFeaturedContent/>
            <YouTubeFAQ/>
            <YouTubeSign/>
            <YouTubeVision/>
            <ContentExperience/>

        </section>
    );
};

export default TwitterMarketing;