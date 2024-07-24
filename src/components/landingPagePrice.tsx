'use client';

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

const tiers = [
  {
    title: 'Standard',
    subheader: 'LICENSE',
    price: '0',
    description: [
      'One end products',
      '12 months updates',
      '6 months of support',
    ],
    subDescription: [
      'JavaScript version',
      'TypeScript version',
      'Design Resources',
      'Commercial applications'
    ],
    buttonText: 'Learn more',
  },
  {
    title: 'Pro',
    subheader: 'LICENSE',
    price: '69.99',
    description: [
      'One end products',
      '12 months updates',
      '6 months of support',
    ],
    subDescription: [
      'JavaScript version',
      'TypeScript version',
      'Design Resources',
      'Commercial applications'
    ],
    buttonText: 'Learn more',
  },
  {
    title: 'Enterprise',
    subheader: 'LICENSE',
    price: '109.99',
    description: [
      'One end products',
      '12 months updates',
      '6 months of support',
    ],
    subDescription: [
      'JavaScript version',
      'TypeScript version',
      'Design Resources',
      'Commercial applications'
    ],
    buttonText: 'Learn more',
  },
];

const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
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
      <Container maxWidth="md" component="main" sx={{ mt: 8 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2 }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
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
                  <ul style={{ listStyleType: 'none', padding: 0, marginBottom: 5 }}>
                    {tier.description.map((line) => (
                      <li key={line} style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography component="span" variant="subtitle1" style={{ marginBottom: 5, marginLeft: '8px' }}>
                          {line}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Divider sx={{ my: 2 }} />
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {tier.subDescription.map((subDesc) => {
                      let isCrossedOut = false;
                      let icon = <CheckIcon />;
                      let textStyle = {};

                      if (tier.title === 'Standard' && ['TypeScript version', 'Design Resources', 'Commercial applications'].includes(subDesc)) {
                        isCrossedOut = true;
                        icon = <CloseIcon />;
                        textStyle = { textDecoration: 'line-through' };
                      } else if (tier.title === 'Pro' && ['Commercial applications'].includes(subDesc)) {
                        isCrossedOut = true;
                        icon = <CloseIcon />;
                        textStyle = { textDecoration: 'line-through' };
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
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    sx={{ fontSize: 10, fontWeight: 'bold', justifyContent: 'flex-end', color: 'Black' }}
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
