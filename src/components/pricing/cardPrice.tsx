import * as React from 'react';
import { keyframes } from '@emotion/react';
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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

export default function CardPrice() {
    return (
        <Grid container spacing={3}>
            {tiers[0].subheader.map((header, index) => {
                const animationKey = index === 0 ? 'left' : index === 1 ? 'center' : 'right';

                return (
                    <Grid
                        item
                        key={header}
                        xs={12}
                        sm={6}
                        md={4}
                        sx={animationStyles[animationKey]}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 'none',
                            }}
                        >
                            <CardHeader title={header} sx={{ fontSize: 5 }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    mb: 2,
                                }}
                            >
                                <Typography
                                    component="h2"
                                    variant="h3"
                                    color="text.primary"
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            color: 'gray',
                                            fontSize: '0.7em',
                                            mr: 0.5,
                                        }}
                                    >
                                        $
                                    </Box>
                                    {tiers[0].price[index]}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                >
                                    /mo
                                </Typography>
                            </Box>
                            <CardContent>

                                <ul
                                    style={{
                                        listStyleType: 'none',
                                        padding: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    {tiers[0].description.map((line) => (
                                        <li
                                            key={line}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <CheckIcon />
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                style={{
                                                    marginBottom: 5,
                                                    marginLeft: 8,
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
                                            listStyleType: 'none',
                                            padding: 0,
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
                                                    {isCrossedOut ? <CloseIcon /> : <CheckIcon />}
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        style={{
                                                            marginLeft: 8,
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
                            <CardActions>
                                <Button
                                    fullWidth
                                    sx={{
                                        fontSize: 10,
                                        fontWeight: 'bold',
                                        textAlign: 'end',
                                        justifyContent: 'flex-end',
                                        color: 'black',
                                    }}
                                >
                                    {tiers[0].buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}
