"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Fade } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';

// Define the custom upload SVG as a React component
const CustomUploadIcon = (props : any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="60" 
    height="60" 
    viewBox="0 0 24 24" 
    style={{ color: '#00B2FE' }} 
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
      <path d="M6.5 2.5c-1.142.188-1.966.538-2.609 1.188C2.5 5.095 2.5 7.36 2.5 11.89s0 6.795 1.391 8.203S7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.407S21.5 16.42 21.5 11.89s0-6.796-1.391-8.203c-.643-.65-1.467-1-2.609-1.188"></path>
      <path d="M9.5 5c.492-.506 1.8-2.5 2.5-2.5M14.5 5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8m9.5 3h-4.926c-.842 0-1.503.704-1.875 1.447c-.403.808-1.21 1.553-2.699 1.553s-2.296-.745-2.7-1.553c-.37-.743-1.032-1.447-1.874-1.447H2.5"></path>
    </g>
  </svg>
);

// Define the custom QR code SVG as a React component
const CustomQrCodeIcon = (props : any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="60" 
    height="60" 
    viewBox="0 0 24 24" 
    style={{ color: '#00B2FE' }} 
    {...props}
  >
    <path 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M9.433 5.833h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m7.834-7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.834h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m3.983-4.75V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-3.084m-18.5 0v3.084a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833v3.084"></path>
  </svg>
);

const CustomTrackChangesIcon = (props : any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="60" 
    height="60" 
    viewBox="0 0 14 14" 
    style={{ color: '#00B2FE' }} 
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></path>
      <path d="M7 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-5v-2m0 13v-2M11.5 7h2M.5 7h2"></path>
    </g>
  </svg>
);

const CardHomeContent = () => {
  const [inView, setInView] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const observeElement = (element : any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (element) observer.current.observe(element);
  };

  const cards = [
    {
      icon: <CustomTrackChangesIcon />,
      title: 'Tracking',
      description: 'Detecting the presence of moving items',
    },
    {
      icon: <CustomQrCodeIcon />,
      title: 'QR Code',
      description: 'Generate QR Codes on existing items',
    },
    {
      icon: <CustomUploadIcon />,
      title: 'Import CSV',
      description: 'Easy to import files in CSV format',
    },
  ];

  return (
    <Box mt={10}>
      <Container maxWidth="md">
        <Box textAlign="center" my={4}>
          <Typography variant="h4" gutterBottom fontWeight={'bold'}>
            What Stageholder helps you?
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={inView} timeout={{ enter: (index + 1) * 1000 }}>
                <Card
                  ref={(el) => observeElement(el)}
                  sx={{
                    height: 300,
                    width: '100%',
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: 'none',  // Remove box shadow
                    border: 'none',      // Remove border
                  }}
                >
                  <CardContent style={{ textAlign: 'center' }}>
                    {card.icon}
                    <Typography variant="h5" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body1">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardHomeContent;
