import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContentExperience from '../../pages/ContentMarketing/ContentExperience/ContentExperience';
import FbClientTestimonial from '../FaceBookAdvertising/FbClientTestimonial';
import FbFeaturedContent from '../FaceBookAdvertising/FbFeaturedContent';
import WhyYouTube from './WhyYouTube';
import WhyYouTubeInvest from './WhyYouTubeInvest';
import YouTubeAdvertisingOffer from './YouTubeAdvertisingOffer';
import YouTubeAwards from './YouTubeAwards';
import YouTubeCallUs from './YouTubeCallUs';
import YouTubeDontTell from './YouTubeDontTell';
import YouTubeFAQ from './YouTubeFAQ';
import YouTubeFeaturedContent from './YouTubeFeaturedContent';
import YouTubeHero from './YouTubeHero';
import YouTubeLeverage from './YouTubeLeverage';
import YouTubeTestimonial from './YouTubeTestimonial';
import YouTubeVision from './YouTubeVision';

const YoutubeAdvertising = () => {
    return (
        <section>
            <PageTitle title="You Tube Advertising Services"/>
            <YouTubeHero/>
            <YouTubeAwards/>
            <YouTubeLeverage/>
            <WhyYouTube/>
            <YouTubeAdvertisingOffer/>
            <WhyYouTubeInvest/>
            <YouTubeTestimonial/>
            <YouTubeFeaturedContent/>
            <YouTubeFAQ/>
            <YouTubeDontTell/>
            <YouTubeVision/>
            <ContentExperience/>
        </section>
    );
};

export default YoutubeAdvertising;