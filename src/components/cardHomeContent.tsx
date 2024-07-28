"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Fade } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';
import CustomTrackChangesIcon from '@/assets/icons/trackingIcon';
import CustomQrCodeIcon from '@/assets/icons/qrCodeIcon';
import CustomUploadIcon from '@/assets/icons/uploadIcon';
import RFIDIcon from '@/assets/icons/rfidIcon';
import MaintenanceIcon from '@/assets/icons/maintenanceIcon';
import SupportIcon from '@/assets/icons/supportIcon';

// Define the custom upload SVG as a React component

const CardHomeContent = () => {
  const [inView, setInView] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const observeElement = (element: any) => {
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
    {
      icon: <RFIDIcon />,
      title: 'RFID',
      description: 'Track moving items with RFID technology.',
    },
    {
      icon: <MaintenanceIcon />,
      title: 'Maintenance',
      description: 'Manage your assets maintenace with ease.',
    },
    {
      icon: <SupportIcon />,
      title: 'Support',
      description: 'We are here to provide the help you need.',
    }
  ];

  return (
    <Box
      mt={10}>
      <Container maxWidth="md">
        <Box textAlign="center" my={4}>
          <Typography variant="h4" gutterBottom fontWeight={'bold'} sx={{ color: 'black' }}>
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
