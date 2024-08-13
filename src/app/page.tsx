"use client";

import React from 'react';
import { Box, createTheme, ThemeProvider, CssBaseline, Divider, PaletteMode } from '@mui/material';
import LandingPageContainer from '@/components/landingPageContainer';
import AboutUs from './features/page';
import Footer from '@/components/footer';
import { MuiNavBar } from '@/components/navbar';
import Pricing from '@/components/pricing/landingPagePrice';

const Home = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', scrollSnapType: 'y mandatory', overflowY: 'auto' }}>
        <MuiNavBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ minHeight: '100vh' }}>
          <LandingPageContainer />
        </Box>
        <Divider id="features" />
        <Box sx={{ minHeight: '100vh' }}>
          <AboutUs />
        </Box>
        <Divider id="pricing" />
        <Box sx={{ minHeight: '100vh' }}>
          <Pricing />
        </Box>
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
