import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContentExperience from '../../pages/ContentMarketing/ContentExperience/ContentExperience';
import Awards from '../../pages/SeoServices/Awards/Awards';
import FbClientTestimonial from '../FaceBookAdvertising/FbClientTestimonial';
import InstagramFAQ from './InstagramFAQ';
import InstagramFeatured from './InstagramFeatured';
import InstagramGaining from './InstagramGaining';
import InstagramHero from './InstagramHero';
import InstagramProvenResult from './InstagramProvenResult';
import InstgramInvest from './InstgramInvest';
import WhatInstgramOffer from './WhatInstgramOffer';
import WhyInstagram from './WhyInstagram';

const InstagramMarketing = () => {
    return (
        <section>
            <PageTitle title="Instgram Advertising Services"/>
            <InstagramHero/>
            <Awards/>
            <InstagramGaining/>
            <WhyInstagram/>
            <WhatInstgramOffer/>
            <InstgramInvest/>
            <FbClientTestimonial/>
            <InstagramFeatured/>
            <InstagramFAQ/>
            <InstagramProvenResult/>
            <ContentExperience/>
        </section>
    );
};

export default InstagramMarketing;