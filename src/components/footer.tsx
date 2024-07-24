import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LOGO from '../assets/Stageholder_Logo-03.png';
import Image from 'next/image';

function Copyright() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Image src={LOGO} 
            alt="Stageholder Logo" 
            width={50}
            height={50}/>
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
    description: string;
    title: string;
}

export default function Footer(props: FooterProps) {
    const { description, title } = props;

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}