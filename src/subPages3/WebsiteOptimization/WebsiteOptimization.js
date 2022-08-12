import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DigitalMarketing from '../../pages/IntenetMarketing/DigitalMarketing/DigitalMarketing';
import InternetClientReview from '../../pages/IntenetMarketing/InternetClientReview/InternetClientReview';
import InternetClientReviewSlider from '../../pages/IntenetMarketing/InternetClientReviewSlider/InternetClientReviewSlider';
import InternetConfused from '../../pages/IntenetMarketing/InternetConfused/InternetConfused';
import InternetFAQ from '../../pages/IntenetMarketing/InternetFAQ/InternetFAQ';
import InternetGetInTouch from '../../pages/IntenetMarketing/InternetGetInTouch/InternetGetInTouch';
import InternetHero from '../../pages/IntenetMarketing/InternetHero/InternetHero';

const WebsiteOptimization = () => {
    return (
        <div>
            <PageTitle title="Website Optimization Services"/>
            <InternetHero />
            <InternetClientReview />
            <InternetClientReviewSlider/>
            <DigitalMarketing />
            <InternetConfused />
            <InternetFAQ />
            <InternetGetInTouch />
        </div>
    );
};

export default WebsiteOptimization;