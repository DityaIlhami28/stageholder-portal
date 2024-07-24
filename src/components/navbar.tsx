'use client'

import { AppBar, Toolbar, IconButton, Stack, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import Image from "next/image";
import LOGO from '../assets/Stageholder_Logo-03.png';
import Link from 'next/link';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const MuiNavBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const drawerOpen = () => {
        setOpenDrawer(true);
    };

    const drawerClose = () => {
        setOpenDrawer(false);
    };

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Features', href: '/features' },
        { text: 'About Us', href: '/about-us' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Login', href: '/login', variant: 'outlined' },
        { text: 'Register', href: '/register', variant: 'contained' }
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 'auto',
                        ml: { xs: '20px', sm: '30px', md: '40px' },
                        width: { xs: '50px', sm: '60px', md: '70px' }
                    }}
                >
                    <Image
                        src={LOGO}
                        alt="Stageholder Logo"
                        width={300}
                        height={300}
                        layout="responsive"
                        quality={100}
                    />
                </Box>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="end"
                            color="black"
                            aria-label="menu"
                            onClick={drawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={openDrawer} onClose={drawerClose}>
                            <List sx={{ width: 250 }}>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} onClick={drawerClose}>
                                        <Link href={item.href} passHref>
                                            <ListItemText primary={item.text} />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Stack direction='row' spacing={3} sx={{ mx: "100px" }}>
                        {menuItems.map((item, index) => (
                            <Link href={item.href} passHref key={index}>
                                <Button
                                    variant={item.variant}
                                    sx={{
                                        color: item.variant ? (item.variant === 'contained' ? 'white' : '#212B36') : '#212B36',
                                        borderColor: item.variant === 'outlined' ? '#212B36' : 'none',
                                        backgroundColor: item.variant === 'contained' ? '#212B36' : 'none',
                                        textTransform: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {item.text}
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
};
