import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import CustomSeoContent from '../SeoContentWriting/CustomSeoContent';
import SeoContentAgency from '../SeoContentWriting/SeoContentAgency';
import SeoContentDependable from '../SeoContentWriting/SeoContentDependable';
import SeoContentHelped from '../SeoContentWriting/SeoContentHelped';
import SeoContentHire from '../SeoContentWriting/SeoContentHire';
import SeoContentHowWork from '../SeoContentWriting/SeoContentHowWork';
import SeoContentOr from '../SeoContentWriting/SeoContentOr';
import SeoContentSlider from '../SeoContentWriting/SeoContentSlider';
import SeoFeaturedContent from '../SeoContentWriting/SeoFeaturedContent';
import SeoPriceContent from '../SeoContentWriting/SeoPriceContent';
import SeoProblemTogether from '../SeoContentWriting/SeoProblemTogether';
import WhatClientSay from '../SeoContentWriting/WhatClientSay';
import WhySmartSeo from '../SeoContentWriting/WhySmartSeo';
import ArticleWritingHero from './ArticleWritingHero';

const ArticleWriting = () => {
    return (
        <section>
            <PageTitle title="Article Writing"/>
            <ArticleWritingHero/>
            <WhatClientSay/>
            <WhySmartSeo/>
            <SeoProblemTogether/>
            <SeoFeaturedContent/>
            <SeoPriceContent/>
            <SeoContentOr/>
            <CustomSeoContent/>
            <SeoContentDependable/>
            <SeoContentAgency/>
            <SeoContentSlider/>
            <SeoContentHelped/>
            <SeoContentHowWork/>
            <SeoContentHire/>
        </section>
    );
};

export default ArticleWriting;