import React from 'react';
import LandingPageContainer from '@/components/landingPageContainer';
import { Box, Divider } from '@mui/material';
import CardHomeContent from '@/components/cardHomeContent';
import LandingPagePrice from '@/components/landingPagePrice';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <>
      {/* <Divider /> */}
      <LandingPageContainer />
      {/* <Divider />
      <CardHomeContent />
      <Divider />
      <LandingPagePrice />
      <Divider /> */}
      <Footer/>
    </>
  );
};

export default Home;
