import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Awards from '../SeoServices/Awards/Awards';
import PaidHero from './PaidHero/PaidHero';
import PPCStrategy from './PPCStrategy/PPCStrategy';

const PaidMarketing = () => {
  return (
    <>
      <PageTitle title="PPC Marketing"/>
      <PaidHero/>
      <Awards/>
      <PPCStrategy/>
    </>
  );
};

export default PaidMarketing;