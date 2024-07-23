import React from 'react';
import LandingPageContainer from '@/components/landingPageContainer';
import CardHomeContent from '@/components/cardHomeContent';
import { Box, Divider } from '@mui/material';
import LandingPagePrice from '@/components/landingPagePrice';

const Home = () => {
  return (
    <>
      <Divider />
      <LandingPageContainer />
      <Divider />
      {/* <CardHomeContent /> */}
      <Divider />
      <LandingPagePrice />
      <Divider />
    </>
  );
};

export default Home;
