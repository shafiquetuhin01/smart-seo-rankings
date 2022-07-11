import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Awards from '../SeoServices/Awards/Awards';
import PaidHero from './PaidHero/PaidHero';
import PPCStrategy from './PPCStrategy/PPCStrategy';
import './PaidMarketing.css';
import PaidCarousel from './PaidCarousel/PaidCarousel';
import HelpedClient from './HelpedClient/HelpedClient';
import PaidWhyChoose from './PaidWhyChoose/PaidWhyChoose';
import PaidOptimization from './PaidOptimization/PaidOptimization';
import PaidAnalytics from './PaidAnalytics/PaidAnalytics';
import PaidCallUs from './PaidAnalytics/PaidCallUs';
import PaidHire from './PaidHire/PaidHire';

const PaidMarketing = () => {
  return (
    <>
      <PageTitle title="PPC Marketing"/>
      <PaidHero/>
      <Awards/>
      <PPCStrategy/>
      <PaidCarousel/>
      <HelpedClient/>
      <PaidWhyChoose/>
      <PaidOptimization/>
      <PaidAnalytics/>
      <PaidCallUs/>
      <PaidHire/>
    </>
  );
};

export default PaidMarketing;