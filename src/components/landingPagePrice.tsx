'use client'

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import { keyframes } from '@mui/system';

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
    subheader: 'Stage Standard',
    price: '0',
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
  },
  {
    title: 'License',
    subheader: 'Stage Pro',
    price: '69.99',
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
  },
  {
    title: 'License',
    subheader: 'Stage Extended',
    price: '109.99',
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
  },
];

const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ mt: 5, pt: 8, pb: 6 }}>
        <Typography
          fontSize={15}
          variant='subtitle1'
          align='center'
          color='grey'>
          PRICING PLANS
        </Typography>
        <Typography
          component="h1"
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
      <Container maxWidth="md" component="main" sx={{ mt: 8, mb: 10 }}>
        <Grid container spacing={3}>
          {tiers.map((tier, index) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              md={4}
              sx={{
                // Apply animations based on card position
                ...((index === 0 && animationStyles.left) ||
                (index === 2 && animationStyles.right) ||
                animationStyles.center)
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mr: 1, ml: 1, boxShadow: "none" }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      <Box component="span" sx={{ color: 'gray', fontSize: '0.7em', mr: 0.5 }}>
                        $
                      </Box>
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul style={{ listStyleType: 'none', marginBottom: 5 }}>
                    {tier.description.map((line) => (
                      <li key={line} style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography component="span" variant="subtitle1" style={{ marginBottom: 5, marginLeft: '8px' }}>
                          {line}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Divider />
                  {tier.subDescription && (
                    <ul style={{ listStyleType: 'none', marginTop: 5 }}>
                      {tier.subDescription.map((subDesc) => {
                        let isCrossedOut = false;
                        let icon = <CheckIcon />;
                        let textStyle = {};

                        if (tier.subheader === 'Stage Standard') {
                          if (['TypeScript version', 'Design resources', 'Commercial applications'].includes(subDesc)) {
                            isCrossedOut = true;
                            icon = <CloseIcon />;
                            textStyle = { textDecoration: 'line-through' };
                          }
                        } else if (tier.subheader === 'Stage Pro') {
                          if (subDesc === 'Commercial applications') {
                            isCrossedOut = true;
                            icon = <CloseIcon />;
                            textStyle = { textDecoration: 'line-through' };
                          }
                        }

                        return (
                          <li key={subDesc} style={{ display: 'flex', alignItems: 'center' }}>
                            {icon}
                            <Typography component="span" variant="subtitle1" style={{ marginLeft: '8px', ...textStyle }}>
                              {subDesc}
                            </Typography>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    sx={{ fontSize: 10, fontWeight: 'bold', textAlign: 'end', justifyContent: 'flex-end', color: 'Black' }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
