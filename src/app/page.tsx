import React from 'react';
import LandingPageContainer from '@/components/landingPageContainer';
import { Box, Divider } from '@mui/material';
import AboutUs from './features/page';
import Footer from '@/components/footer';
import { MuiNavBar } from '@/components/navbar';

const Home = () => {
  return (
    <Box sx={{ height: '100vh', scrollSnapType: 'y mandatory', overflowY: 'auto' }}>
      <MuiNavBar />
      <Box sx={{ minHeight: '100vh'}}>
        <LandingPageContainer />
      </Box>
      <Divider />
      <Box sx={{ minHeight: '100vh'}}>
        <AboutUs />
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
};

export default Home;
