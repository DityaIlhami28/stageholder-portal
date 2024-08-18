import React from 'react';
import { Box, Container, Typography, Link, useTheme, PaletteMode } from '@mui/material';
import Image from 'next/image';
import LOGO from '../assets/Stageholder_Logo-03.png'; // Light mode logo
import LOGODARK from '../assets/Stageholder_Logo-02.png'; // Dark mode logo

interface FooterProps {
    description?: string; // Make description optional
    title?: string;
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function Copyright({ mode, toggleColorMode }: FooterProps) {
    const theme = useTheme();

    const logo = theme.palette.mode === 'light' ? LOGO : LOGODARK;

    return (
        <div style={{ textAlign: 'center' }}>
            <Image src={logo} alt="Stageholder Logo" width={50} height={50} />
            <Typography variant="body2" color="text.secondary">
                {'© All rights reserved'}
                <br />
                {'made by '}
                <Link style={{ textDecoration: 'none', color: 'blue' }} href="#">
                    stageholder.co
                </Link>{' '}
            </Typography>
        </div>
    );
}

export default function Footer({ description, title, mode, toggleColorMode }: FooterProps) {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3}}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                {description && (
                    <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                        {description}
                    </Typography>
                )}
                <Copyright mode={mode} toggleColorMode={toggleColorMode} />
            </Container>
        </Box>
    );
}
