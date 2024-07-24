"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Fade } from '@mui/material';
import { TrackChanges, QrCode2, CloudUpload } from '@mui/icons-material';

const CardHomeContent = () => {
  const [inView, setInView] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const observeElement = (element: HTMLElement | null) => {
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
      icon: <TrackChanges style={{ fontSize: 60, color: '#00B2FE' }} />,
      title: 'Tracking',
      description: 'Detecting the presence of moving items',
    },
    {
      icon: <QrCode2 style={{ fontSize: 60, color: '#00B2FE' }} />,
      title: 'QR Code',
      description: 'Generate QR Codes on existing items',
    },
    {
      icon: <CloudUpload style={{ fontSize: 60, color: '#00B2FE' }} />,
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
