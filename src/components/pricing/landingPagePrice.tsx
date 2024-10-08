'use client'

import * as React from 'react';
import { Grid, Tab, Tabs, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { alpha, keyframes } from '@mui/material/styles';
import PricingCard from './cardPrice';

// Define keyframes for the animations with fade effect
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Define animation styles for each card position
const animationStyles = {
  left: {
    animation: `${slideInFromLeft} 1s ease-out`,
  },
  right: {
    animation: `${slideInFromRight} 1s ease-out`,
  },
  center: {
    animation: `${slideInFromTop} 1s ease-out`,
  }
};

const tiers = [
  {
    title: 'License',
    subheader: ['Stage Standard', 'Stage Pro', 'Stage Extended'],
    price: ['0', '69.99', '109.99'],
    description: [
      'One end products',
      '12 months updates',
      '6 months of support',
    ],
    subDescription: [
      'JavaScript version',
      'TypeScript version',
      'Design resources',
      'Commercial applications'
    ],
    buttonText: 'Learn More >',
  }
];


export default function Pricing() {
  const theme = useTheme();
  const [value, setValue] = React.useState('Stage Standard');
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container
        disableGutters maxWidth="sm" component="main" sx={{ mt: 5, pt: 8, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: theme.palette.mode === 'light' ? 'white' : '#121212' }}>
        <Typography
          fontSize={12}
          variant='subtitle1'
          align='center'
          color='grey'>
          PRICING PLANS
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          fontWeight='bold'
          sx={{ mt: 5, mb: 3 }}
        >
          The right plan <br /> for your business
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Choose the plan for your needs. Always flexible to grow
        </Typography>
      </Container>
      {isMobile ? (
        <Container maxWidth="md" component="main" sx={{ border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
          <Grid>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                mt: 5,
                pt: 5,
                background: theme.palette.mode === 'light' ? 'white' : '#121212',
              }}
            >
              {tiers[0].subheader.map((header) => (
                <Tab key={header} value={header} label={header} />
              ))}
            </Tabs>
          </Grid>

          <Box
            sx={{
              border: `none`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <PricingCard selectedStage={value} />
          </Box>
        </Container>

      ) : (
        <Box sx={{ border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              border: `none`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '75%',
            }}>
            <PricingCard selectedStage={value} />
          </Box>
        </Box>

      )}




    </ThemeProvider>
  );
}
