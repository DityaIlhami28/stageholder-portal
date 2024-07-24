'use client'

// import * as React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import { Divider } from '@mui/material';
// import { keyframes } from '@mui/system';

// // Define keyframes for the animations with fade effect
// const slideInFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const slideInFromRight = keyframes`
//   from {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const slideInFromTop = keyframes`
//   from {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;

// // Define animation styles for each card position
// const animationStyles = {
//   left: {
//     animation: `${slideInFromLeft} 1s ease-out`,
//   },
//   right: {
//     animation: `${slideInFromRight} 1s ease-out`,
//   },
//   center: {
//     animation: `${slideInFromTop} 1s ease-out`,
//   }
// };

// const tiers = [
//   {
//     title: 'License',
//     subheader: 'Stage Standard',
//     price: '0',
//     description: [
//       'One end products',
//       '12 months updates',
//       '6 months of support',
//     ],
//     subDescription: [
//       'JavaScript version',
//       'TypeScript version',
//       'Design resources',
//       'Commercial applications'
//     ],
//     buttonText: 'Learn More >',
//   },
//   {
//     title: 'License',
//     subheader: 'Stage Pro',
//     price: '69.99',
//     description: [
//       'One end products',
//       '12 months updates',
//       '6 months of support',
//     ],
//     subDescription: [
//       'JavaScript version',
//       'TypeScript version',
//       'Design resources',
//       'Commercial applications'
//     ],
//     buttonText: 'Learn More >',
//   },
//   {
//     title: 'License',
//     subheader: 'Stage Extended',
//     price: '109.99',
//     description: [
//       'One end products',
//       '12 months updates',
//       '6 months of support',
//     ],
//     subDescription: [
//       'JavaScript version',
//       'TypeScript version',
//       'Design resources',
//       'Commercial applications'
//     ],
//     buttonText: 'Learn More >',
//   },
// ];

// const defaultTheme = createTheme();

// export default function Pricing() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//       <CssBaseline />
//       {/* Hero unit */}
//       <Container disableGutters maxWidth="sm" component="main" sx={{ mt: 5, pt: 8, pb: 6 }}>
//         <Typography
//           fontSize={15}
//           variant='subtitle1'
//           align='center'
//           color='grey'>
//           PRICING PLANS
//         </Typography>
//         <Typography
//           component="h1"
//           variant="h2"
//           align="center"
//           color="text.primary"
//           gutterBottom
//           fontWeight='bold'
//           sx={{ mt: 5, mb: 3 }}
//         >
//           The right plan <br /> for your business
//         </Typography>
//         <Typography variant="h5" align="center" color="text.secondary" component="p">
//           Choose the plan for your needs. Always flexible to grow
//         </Typography>
//       </Container>
//       {/* End hero unit */}
//       <Container maxWidth="md" component="main" sx={{ mt: 8, mb: 10 }}>
//         <Grid container spacing={3}>
//           {tiers.map((tier, index) => (
//             <Grid
//               item
//               key={tier.title}
//               xs={12}
//               sm={6}
//               md={4}
//               sx={{
//                 // Apply animations based on card position
//                 ...((index === 0 && animationStyles.left) ||
//                 (index === 2 && animationStyles.right) ||
//                 animationStyles.center)
//               }}
//             >
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mr: 1, ml: 1, boxShadow: "none" }}>
//                 <CardHeader
//                   title={tier.title}
//                   subheader={tier.subheader}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'baseline',
//                       mb: 2,
//                     }}
//                   >
//                     <Typography component="h2" variant="h3" color="text.primary">
//                       <Box component="span" sx={{ color: 'gray', fontSize: '0.7em', mr: 0.5 }}>
//                         $
//                       </Box>
//                       {tier.price}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       /mo
//                     </Typography>
//                   </Box>
//                   <ul style={{ listStyleType: 'none', marginBottom: 5 }}>
//                     {tier.description.map((line) => (
//                       <li key={line} style={{ display: 'flex', alignItems: 'center' }}>
//                         <CheckIcon />
//                         <Typography component="span" variant="subtitle1" style={{ marginBottom: 5, marginLeft: '8px' }}>
//                           {line}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                   <Divider />
//                   {tier.subDescription && (
//                     <ul style={{ listStyleType: 'none', marginTop: 5 }}>
//                       {tier.subDescription.map((subDesc) => {
//                         let isCrossedOut = false;
//                         let icon = <CheckIcon />;
//                         let textStyle = {};

//                         if (tier.subheader === 'Stage Standard') {
//                           if (['TypeScript version', 'Design resources', 'Commercial applications'].includes(subDesc)) {
//                             isCrossedOut = true;
//                             icon = <CloseIcon />;
//                             textStyle = { textDecoration: 'line-through' };
//                           }
//                         } else if (tier.subheader === 'Stage Pro') {
//                           if (subDesc === 'Commercial applications') {
//                             isCrossedOut = true;
//                             icon = <CloseIcon />;
//                             textStyle = { textDecoration: 'line-through' };
//                           }
//                         }

//                         return (
//                           <li key={subDesc} style={{ display: 'flex', alignItems: 'center' }}>
//                             {icon}
//                             <Typography component="span" variant="subtitle1" style={{ marginLeft: '8px', ...textStyle }}>
//                               {subDesc}
//                             </Typography>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     fullWidth
//                     sx={{ fontSize: 10, fontWeight: 'bold', textAlign: 'end', justifyContent: 'flex-end', color: 'Black' }}
//                   >
//                     {tier.buttonText}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// }


import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useTabs } from '../styles/hooks/use-tabs';

// import { CONFIG } from 'src/config-global';

// import { varAlpha } from '../styles/theme/utils';

import { Iconify } from '../styles/icon/iconify';
import { varFade, varScale } from '../styles/animate/variants';
import { MotionViewport } from '../styles/animate/motion-viewport';

import { SectionTitle } from '../styles/section-title';
import { FloatLine, FloatXIcon } from '../styles/svg-elements';

// ----------------------------------------------------------------------

export default function Pricing({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const tabs = useTabs('Standard');

  const renderDescription = (
    <SectionTitle
      caption="plans"
      title="Transparent"
      txtGradient="pricing"
      description="Choose from flexible pricing options designed to fit your business needs and budget with no hidden fees."
      sx={{ mb: 8, textAlign: 'center' }}
    />
  );

  const renderContentDesktop = (
    <Box gridTemplateColumns="repeat(3, 1fr)" sx={{ display: { xs: 'none', md: 'grid' } }}>
      {PLANS.map((plan) => (
        <PlanCard
          key={plan.license}
          plan={plan}
          sx={{
            ...(plan.license === 'Plus' && {
              [theme.breakpoints.down(1440)]: {
                borderLeft: `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
                borderRight: `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
              },
            }),
          }}
        />
      ))}
    </Box>
  );

  const renderContentMobile = (
    <Stack spacing={5} alignItems="center" sx={{ display: { md: 'none' } }}>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={{
          boxShadow: `0px -2px 0px 0px ${alpha(theme.palette.grey[500], 0.08)} inset`,
        }}
      >
        {PLANS.map((tab) => (
          <Tab key={tab.license} value={tab.license} label={tab.license} />
        ))}
      </Tabs>

      <Box
        sx={{
          width: 1,
          borderRadius: 2,
          border: `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
        }}
      >
        {PLANS.map(
          (tab) => tab.license === tabs.value && <PlanCard key={tab.license} plan={tab} />
        )}
      </Box>
    </Stack>
  );

  return (
    <Stack component="section" sx={{ py: 10, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />

        <Container>{renderDescription}</Container>

        <Box
          sx={{
            position: 'relative',
            '&::before, &::after': {
              width: 64,
              height: 64,
              content: "''",
              [theme.breakpoints.up(1440)]: {
                display: 'block',
              },
            },
          }}
        >
          <Container>{renderContentDesktop}</Container>

          <FloatLine sx={{ top: 64, left: 0 }} />
          <FloatLine sx={{ bottom: 64, left: 0 }} />
        </Box>

        <Container>{renderContentMobile}</Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type PlanCardProps = StackProps & {
  plan: {
    license: string;
    price: number;
    commons: string[];
    options: string[];
    icons: string[];
  };
};

function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  const standardLicense = plan.license === 'Standard';

  const plusLicense = plan.license === 'Plus';

  const renderLines = (
    <>
      <FloatLine vertical sx={{ top: -64, left: 0, height: 'calc(100% + (64px * 2))' }} />
      <FloatLine vertical sx={{ top: -64, right: 0, height: 'calc(100% + (64px * 2))' }} />
      <FloatXIcon sx={{ top: -8, left: -8 }} />
      <FloatXIcon sx={{ top: -8, right: -8 }} />
      <FloatXIcon sx={{ bottom: -8, left: -8 }} />
      <FloatXIcon sx={{ bottom: -8, right: -8 }} />
    </>
  );

  return (
    <Stack
      spacing={5}
      component={MotionViewport}
      sx={{
        px: 6,
        py: 8,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      {plusLicense && renderLines}

      <Stack direction="row" alignItems="center">
        <Stack flexGrow={1}>
          <m.div variants={varFade({ distance: 24 }).inLeft}>
            <Typography variant="h4" component="h6">
              {plan.license}
            </Typography>
          </m.div>

          <m.div variants={varScale({ distance: 24 }).inX}>
            <Box
              sx={{
                width: 32,
                height: 6,
                opacity: 0.24,
                borderRadius: 1,
                bgcolor: 'error.main',
                ...(standardLicense && { bgcolor: 'primary.main' }),
                ...(plusLicense && { bgcolor: 'secondary.main' }),
              }}
            />
          </m.div>
        </Stack>

        <m.div variants={varFade({ distance: 24 }).inLeft}>
          <Box component="span" sx={{ typography: 'h3' }}>
            ${plan.price}
          </Box>
        </m.div>
      </Stack>

      <Stack direction="row" spacing={2}>
        {plan.icons.map((icon, index) => (
          <Box
            component={m.img}
            variants={varFade().in}
            key={icon}
            alt={icon}
            src={icon}
            sx={{
              width: 24,
              height: 24,
              ...(standardLicense && [1, 2].includes(index) && { display: 'none' }),
            }}
          />
        ))}
        {standardLicense && (
          <Box component={m.span} variants={varFade().in} sx={{ ml: -1 }}>
            (only)
          </Box>
        )}
      </Stack>

      <Stack spacing={2.5}>
        {plan.commons.map((option) => (
          <Stack
            key={option}
            component={m.div}
            variants={varFade().in}
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            <Iconify width={16} icon="eva:checkmark-fill" />
            {option}
          </Stack>
        ))}

        <m.div variants={varFade({ distance: 24 }).inLeft}>
          <Divider sx={{ borderStyle: 'dashed' }} />
        </m.div>

        {plan.options.map((option, index) => {
          const disabled =
            (standardLicense && [1, 2, 3].includes(index)) || (plusLicense && [3].includes(index));

          return (
            <Stack
              key={option}
              component={m.div}
              variants={varFade().in}
              spacing={1.5}
              direction="row"
              alignItems="center"
              sx={{
                typography: 'body2',
                ...(disabled && { color: 'text.disabled', textDecoration: 'line-through' }),
              }}
            >
              <Iconify width={18} icon={disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'} />
              {option}
            </Stack>
          );
        })}
      </Stack>

      <m.div variants={varFade({ distance: 24 }).inUp}>
        <Button
          fullWidth
          variant={plusLicense ? 'contained' : 'outlined'}
          color="inherit"
          size="large"
          target="_blank"
          rel="noopener"
          href={"/pricing"}
        >
          Get started
        </Button>
      </m.div>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const PLANS = [...Array(3)].map((_, index) => ({
  license: ['Standard', 'Plus', 'Extended'][index],
  price: [69, 129, 599][index],
  commons: [
    'One end products',
    '12 months updates',
    '6 months of support',
    'One-time payments',
    'Lifetime perpetual license.',
  ],
  options: [
    'JavaScript version',
    'TypeScript version',
    'Design resources (Figma)',
    'Commercial applications',
  ],
  icons: [
    // `${CONFIG.site.basePath}/assets/icons/platforms/ic-js.svg`,
    // `${CONFIG.site.basePath}/assets/icons/platforms/ic-ts.svg`,
    // `${CONFIG.site.basePath}/assets/icons/platforms/ic-figma.svg`,
  ],
}));
