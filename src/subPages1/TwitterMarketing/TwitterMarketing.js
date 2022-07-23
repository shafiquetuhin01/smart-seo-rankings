import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import YouTubeAwards from '../YoutubeAdvertising/YouTubeAwards';
import TwitterCarousel from './TwitterCarousel';
import TwitterFollower from './TwitterFollower';
import TwitterHero from './TwitterHero';
import WhyTwitterImportant from './WhyTwitterImportant';
import WhyTwitterOffer from './WhyTwitterOffer';

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
        </section>
    );
};

export default TwitterMarketing;