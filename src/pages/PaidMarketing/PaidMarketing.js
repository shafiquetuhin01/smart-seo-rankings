import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Awards from '../SeoServices/Awards/Awards';
import PaidHero from './PaidHero/PaidHero';
import PPCStrategy from './PPCStrategy/PPCStrategy';
import './PaidMarketing.css';
import PaidCarousel from './PaidCarousel/PaidCarousel';

const PaidMarketing = () => {
  return (
    <>
      <PageTitle title="PPC Marketing"/>
      <PaidHero/>
      <Awards/>
      <PPCStrategy/>
      <PaidCarousel/>
    </>
  );
};

export default PaidMarketing;