import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ReviewWidget from '../SeoServices/ClientTestimonial/ReviewWidget';
import TestimonialCarousel from '../SeoServices/ClientTestimonial/TestimonialCarousel';
import ContentAward from './ContentHero/ContentAward';
import ContentHero from './ContentHero/ContentHero';
import OurContent from './ContentHero/OurContent';
import CustomQuote from './CustomQuote';

const ContentMarketing = () => {
    return (
        <>
            <PageTitle title="Content Marketing Services"/>
            <ContentHero/>
            <ContentAward/>
            <OurContent/>
            <TestimonialCarousel/>
            <ReviewWidget/>
            <CustomQuote/>
        </>
    );
};

export default ContentMarketing;