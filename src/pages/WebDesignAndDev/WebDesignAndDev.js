import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import InternetClientReview from '../IntenetMarketing/InternetClientReview/InternetClientReview';
import InternetClientReviewSlider from '../IntenetMarketing/InternetClientReviewSlider/InternetClientReviewSlider';
import InternetFAQ from '../IntenetMarketing/InternetFAQ/InternetFAQ';
import InternetGetInTouch from '../IntenetMarketing/InternetGetInTouch/InternetGetInTouch';
import WebDesignCustomQuote from './WebDesignCustomQuote';
import WebDesignHero from './WebDesignHero';
import WebDesignPackages from './WebDesignPackages';
import WebDesignProcess from './WebDesignProcess';
import WebDesignSingleSlider from './WebDesignSingleSlider';

const WebDesignAndDev = () => {
    return (
        <>
            <PageTitle title="Web Design & Development Services"/>
            <WebDesignHero/>
            <InternetClientReview/>
            <InternetClientReviewSlider/>
            <WebDesignCustomQuote/>
            <WebDesignSingleSlider/>
            <WebDesignPackages/>
            <WebDesignProcess/>
            <InternetFAQ/>
            <InternetGetInTouch/>
        </>
    );
};

export default WebDesignAndDev;