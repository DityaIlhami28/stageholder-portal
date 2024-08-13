// components/LandingPageContainer.js
"use client"
import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Image from 'next/image';
import LOGO from '../assets/Stageholder_Logo-05.png';
import { TypeAnimation } from 'react-type-animation';

const LandingPageContainer = () => {
  const theme = useTheme();

  const style = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animated-container {
    animation: slideDown 1s ease-out;
  }
    body {
      --text-color: ${theme.palette.mode === 'light' ? 'black' : 'white'};
    }
`;

  return (
    <>
      <style>{style}</style>
      <Box
        sx={{
          minHeight: '100vh', // Ensure it covers the full viewport height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.mode === 'light' ? 'white' : '#121212', // Full background color
        }}
      >
        <Container
          id="home"
          maxWidth="md"
          sx={{
            textAlign: 'left',
            pt: { xs: '15rem', sm: '15rem', md: '18rem' },
            pb: '2rem',
            ml: { xs: 'auto', sm: 'auto', md: '8rem' },
            mr: { xs: 'auto', sm: 'auto', md: '8rem' },
            color: 'var(--text-color)', // Use the CSS variable for text color
          }}
          className="animated-container"
        >
          <Box mb={2}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight={'bold'}
              sx={{
                color: 'var(--text-color)',
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', xxl: '4.5rem', xxxl: '5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Tracking Your <br /> Asset with
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: { xs: '1rem', sm: '2rem' },
              }}
            >
              <Box sx={{ width: { xs: '80%', sm: '70%', md: '60%', lg: '50%' } }}>
                <Image
                  src={LOGO}
                  alt="Stageholder Logo"
                  width={500}
                  height={120}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                fontSize: { xs: '1em', sm: '1.5em', md: '2em' },
                padding: { xs: '1em', sm: '2em', md: 0 }, 
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <TypeAnimation
                sequence={[
                  'We manage asset maintenance.',
                  1000,
                  'We track asset check-ins and check-outs.',
                  1000,
                  'We monitor asset warranties.',
                  1000,
                  'We provide comprehensive asset records.',
                  1000,
                  'We streamline asset depreciation tracking.',
                  1000,
                  'We support asset lifecycle management.',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: 'inherit', color: 'var(--text-color)' }} // Use the CSS variable for text color
                wrapper="span"
                repeat={Infinity}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPageContainer;
