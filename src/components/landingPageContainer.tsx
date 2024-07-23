// components/LandingPage.js
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Star, Bolt, OpenInNew } from '@mui/icons-material';
import Image from 'next/image';
import LOGO from '../assets/Stageholder_Logo-05.png';

// Define keyframes in a style tag
const style = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 2;
      transform: translateY(0);
    }
  }
  .animated-container {
    animation: slideDown 2s ease-out;
  }
`;

const LandingPageContainer = () => {
    return (
        <>
            <style>{style}</style>
            <Container maxWidth="sm" style={{ textAlign: 'center', paddingTop: '12rem', marginLeft: '20rem' }} className="animated-container">
                <Box mb={2}>
                    <Typography variant="h3" component="h1" gutterBottom fontWeight={'bold'}>
                        Tracking Your <br /> Asset with
                    </Typography>
                    <Image
                        src={LOGO}
                        alt="Stageholder Logo"
                        width={500}
                        height={120}
                    />
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        gutterBottom
                        fontWeight={'bold'}
                        sx={{ fontSize: '0.875rem' }} // Adjust the font size as needed
                    >
                        The starting point for your next project is based on MUI. <br />
                        Easy customization helps you build apps faster and better.
                    </Typography>

                    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
                        <Star sx={{ color: '#FFD700' }} />
                        <Star sx={{ color: '#FFD700' }} />
                        <Star sx={{ color: '#FFD700' }} />
                        <Star sx={{ color: '#FFD700' }} />
                        <Star sx={{ color: '#FFD700' }} />
                        <Typography variant="body2" color="textSecondary" ml={1} fontWeight={'bold'}>
                            4.95/5 (939+ reviews)
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" gap={2} my={2}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: "#212B36",
                                color: "white",
                                textTransform: "none",
                                fontWeight: "bold",
                                borderRadius: '8px',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.7rem', // Adjust the icon size as needed
                                }
                            }}
                            startIcon={<Bolt />}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: "#212B36",
                                borderColor: "#212B36",
                                textTransform: "none",
                                fontWeight: "bold",
                                borderRadius: '8px'
                            }}
                            startIcon={<OpenInNew />}
                        >
                            Design Preview
                        </Button>
                    </Box>
                    <Button
                        variant="text"
                        size="large"
                        sx={{
                            color: "#212B36",
                            textTransform: "none",
                            fontWeight: "bold",
                            textDecoration: "underline"
                        }}
                        endIcon={<OpenInNew />}
                    >
                        Get Free Version
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default LandingPageContainer;
