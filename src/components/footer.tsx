import React from 'react';
import { Box, Container, Typography, Link, useTheme, PaletteMode } from '@mui/material';
import Image from 'next/image';
import LOGO from '../assets/Stageholder_Logo-03.png'; // Light mode logo
import LOGODARK from '../assets/Stageholder_Logo-02.png'; // Dark mode logo'
import ToggleColorMode from "./toggleColorMode";


interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}


function Copyright({ mode, toggleColorMode }: AppAppBarProps) {
    const theme = useTheme(); // Access the current theme

    // Choose the appropriate logo based on the theme mode
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

interface FooterProps {
    description?: string; // Make description optional
    title?: string;
}

export default function Footer(props: FooterProps) {
    const { description, title } = props;

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
                <Copyright mode={'light'} toggleColorMode={function (): void {
                    throw new Error('Function not implemented.');
                } } />
            </Container>
        </Box>
    );
}
