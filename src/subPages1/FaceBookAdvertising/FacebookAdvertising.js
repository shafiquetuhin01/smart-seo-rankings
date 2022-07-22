import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContentExperience from '../../pages/ContentMarketing/ContentExperience/ContentExperience';
import Awards from '../../pages/SeoServices/Awards/Awards';
import FacebookEngagement from './FacebookEngagement';
import FacebookHome from './FacebookHome';
import FbClientTestimonial from './FbClientTestimonial';
import FbFAQ from './FbFAQ';
import FbFeaturedContent from './FbFeaturedContent';
import FbVision from './FbVision';
import FbWinSocialMedia from './FbWinSocialMedia';
import WhatFbMarketingOffer from './WhatFbMarketingOffer';
import WhyFbAdvertising from './WhyFbAdvertising';
import WhyNeedFbAdvertising from './WhyNeedFbAdvertising';

const FacebookAdvertising = () => {
    return (
        <div>
            <PageTitle title="Facebook Advertising"/>
            <FacebookHome/>
            <Awards/>
            <FacebookEngagement/>
            <WhyFbAdvertising/>
            <WhatFbMarketingOffer/>
            <WhyNeedFbAdvertising/>
            <FbClientTestimonial/>
            <FbFeaturedContent/>
            <FbFAQ/>
            <FbWinSocialMedia/>
            <FbVision/>
            <ContentExperience/>
        </div>
    );
};

export default FacebookAdvertising;