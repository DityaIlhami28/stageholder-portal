'use client'

import * as React from 'react';
import { Tab, Tabs } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { keyframes } from '@mui/system';
import { alpha } from '@mui/material/styles';
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

const defaultTheme = createTheme();

const renderDesktop = (
  <Box gridTemplateColumns="repeat(3, 1fr)" sx={{ display: { xs: 'none', md: 'grid' } }}>
    <PricingCard />
  </Box>
);

export default function Pricing() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters maxWidth="sm" component="main" sx={{ mt: 5, pt: 8, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      {/* End hero unit */}

      <Container maxWidth="md" component="main" sx={{ mt: 8, mb: 10, border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid>
          {/* mobile */}
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              boxShadow: `0px -2px 0px 0px ${alpha(defaultTheme.palette.grey[500], 0.08)} inset`,
              display: { md: "none" }
            }}
          >
            {tiers[0].subheader.map((header, index) => (
              <Tab key={index} value={header} label={header} />
            ))}
          </Tabs>
        </Grid>
      </Container>
      <Box
        sx={{
          border: `none`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <PricingCard />
      </Box>
    </ThemeProvider>
  );
}
