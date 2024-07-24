import React from 'react';
import LandingPageContainer from '@/components/landingPageContainer';
import { Box, Divider } from '@mui/material';
import AboutUs from './features/page';

const Home = () => {
  return (
    <Box sx={{ height: '100vh', scrollSnapType: 'y mandatory', overflowY: 'auto' }}>
      <Box sx={{ minHeight: '100vh'}}>
        <LandingPageContainer />
      </Box>
      <Divider />
      <Box sx={{ minHeight: '100vh'}}>
        <AboutUs />
      </Box>
    </Box>
  );
};

export default Home;
