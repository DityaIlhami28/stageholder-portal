import * as React from 'react';
import { keyframes } from '@emotion/react';
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MaximizeIcon from '@mui/icons-material/Maximize';
import JSLOGO from '@/assets/JavaScript-Symbol.png';
import TSLOGO from '@/assets/typescript-icon.png';
import FIGMALOGO from '@/assets/figma-logo.png';
import Image from 'next/image';

// Define keyframe animations
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

// Animation styles
const animationStyles = {
    left: {
        animation: `${slideInFromLeft} 1s ease-out`,
    },
    right: {
        animation: `${slideInFromRight} 1s ease-out`,
    },
    center: {
        animation: `${slideInFromTop} 1s ease-out`,
    },
};

// Pricing tiers data
const tiers = [
    {
        title: 'License',
        subheader: ['Stage Standard', 'Stage Pro', 'Stage Extended'],
        price: ['0', '69.99', '109.99'],
        description: [
            'One end product',
            '12 months updates',
            '6 months of support',
        ],
        subDescription: [
            'JavaScript version',
            'TypeScript version',
            'Design resources',
            'Commercial applications',
        ],
        buttonText: 'Learn More >',
    },
];

const theme = createTheme();

interface CardPriceProps {
    selectedStage: string;
}

export default function CardPrice({ selectedStage }: CardPriceProps) {
    return (
        <Grid container spacing={4}>
            {tiers[0].subheader.map((header, index) => {
                if (selectedStage !== header && window.innerWidth < 960) return null; // Hide other stages on mobile

                const animationKey = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
                return (
                    <Grid
                        item
                        key={header}
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{ ...animationStyles[animationKey], border: 'none' }}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 'none',
                                border: 'none',
                            }}
                        >
                            <Box sx={{ border: 'none', display: 'flex', flexDirection: 'column', ml: 7 }}>
                                <Typography
                                    component="h2"
                                    variant="h3"
                                    color="text.primary"
                                >
                                    <Box sx={{ display: 'flex', fontWeight: 'bold', fontSize: 15.5 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            {tiers[0].subheader[index]}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ml: 8 }}>
                                            <Box
                                                component="span"
                                                sx={{
                                                    color: 'text.primary',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                $
                                            </Box>
                                            {tiers[0].price[index]}
                                        </Box>
                                    </Box>
                                </Typography>

                                <Box>
                                    <MaximizeIcon
                                        sx={{
                                            color: tiers[0].subheader[index] === 'Stage Pro' ? 'magenta' :
                                                tiers[0].subheader[index] === 'Stage Extended' ? 'orange' :
                                                    'lightgreen'
                                        }}
                                    />
                                </Box>

                                <Box
                                    height="25px"
                                    width="25px"
                                    sx={{ display: 'flex', mb: 5 }}>
                                    {header === 'Stage Standard' ? (
                                        <>
                                            <Image
                                                src={JSLOGO}
                                                alt='JavaScript Logo'
                                                layout='responsive'
                                                width={10}
                                                height={10}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <Typography>
                                                (Only)
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Image
                                                src={JSLOGO}
                                                alt='JavaScript Logo'
                                                layout='responsive'
                                                width={10}
                                                height={10}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <Image
                                                src={TSLOGO}
                                                alt='TypeScript Logo'
                                                layout='responsive'
                                                width={4}
                                                height={4}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <Image
                                                src={FIGMALOGO}
                                                alt='Figma Logo'
                                                layout='responsive'
                                                width={5}
                                                height={5}
                                                style={{ marginRight: '10px' }}
                                            />
                                        </>
                                    )}
                                </Box>
                            </Box>

                            <CardContent
                                sx={{ display: 'flex', flexDirection: 'column', ml: 7 }}>
                                <ul>
                                    {tiers[0].description.map((line) => (
                                        <li
                                            key={line}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',

                                            }}
                                        >
                                            <CheckIcon
                                                sx={{ mb: 2 }} />
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                style={{
                                                    marginLeft: 8,
                                                    marginBottom: 10,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {line}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Divider />
                                {tiers[0].subDescription && (
                                    <ul
                                        style={{
                                            marginTop: 5,
                                        }}
                                    >
                                        {tiers[0].subDescription.map((subDesc) => {
                                            const isCrossedOut = header === 'Stage Standard' && ['TypeScript version', 'Design resources', 'Commercial applications'].includes(subDesc)
                                                || header === 'Stage Pro' && subDesc === 'Commercial applications';

                                            return (
                                                <li
                                                    key={subDesc}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {isCrossedOut ? <CloseIcon sx={{ mb: 2 }} /> : <CheckIcon sx={{ mb: 2 }} />}
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        style={{
                                                            marginLeft: 8,
                                                            marginBottom: 10,
                                                            textDecoration: isCrossedOut ? 'line-through' : 'none',
                                                        }}
                                                    >
                                                        {subDesc}
                                                    </Typography>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </CardContent>

                            <CardActions
                                sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    color='inherit'
                                    variant={index === 0 || index === tiers[0].subheader.length - 1 ? 'outlined' : 'contained'}
                                    endIcon={<ArrowForwardIosIcon sx={{ color: index === 0 || index === tiers[0].subheader.length - 1 ? 'black' : 'white' }} />}
                                    sx={{
                                        bgcolor: index === 0 || index === tiers[0].subheader.length - 1 ? 'transparent' : 'black',
                                        height: 50,
                                        width: '73%',
                                        justifyContent: 'center',
                                        color: 'black',
                                        border: '1px solid black',
                                        borderRadius: 2,
                                        '&:hover': {
                                            '& .overlay': {
                                                opacity: 1,
                                            }
                                        }
                                    }} >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Public Sans, sans-serif',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            textTransform: 'none',
                                            color: index === 0 || index === tiers[0].subheader.length - 1 ? 'inherit' : 'white',
                                        }}>
                                        Learn More
                                    </Typography>

                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}