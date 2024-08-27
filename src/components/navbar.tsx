/* eslint-disable react/jsx-key */
'use client';

import { AppBar, Toolbar, IconButton, Stack, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Box, PaletteMode } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LOGO from '../assets/Stageholder_Logo-03.png';
import LOGODARK from '../assets/Stageholder_Logo-02.png';
import ToggleColorMode from "./toggleColorMode";
import Link from "next/link";

interface MenuItem {
    text: string;
    href: string;
    variant?: 'text' | 'outlined' | 'contained';
}

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

export const MuiNavBar = ({ mode, toggleColorMode }: AppAppBarProps) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navLogo = theme.palette.mode === 'light' ? LOGO : LOGODARK

    const drawerOpen = () => {
        setOpenDrawer(true);
    };

    const drawerClose = () => {
        setOpenDrawer(false);
    };

    const menuItems: MenuItem[] = [
        { text: 'Home', href: '/', },
        { text: 'Features', href: '/features' },
        { text: 'About Us', href: '/about-us' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Login', href: '#login', variant: 'outlined' },
        { text: 'Register', href: '#register', variant: 'contained' }
    ];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: mode === 'light' ? "white" : "#333", boxShadow: "none" }}>
            <Toolbar
                variant="regular"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: mode === 'light' ? 'rgba(255, 255, 255)' : 'rgba(22, 28, 36)',
                }}
            >
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
                        src={navLogo}
                        alt="Stageholder Logo"
                        width={300}
                        height={300}
                        quality={100}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="end"
                            sx={{ color: mode === 'light' ? "black" : "white" }}
                            aria-label="menu"
                            onClick={drawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={openDrawer} onClose={drawerClose}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: mode === 'light' ? 'white' : '#212B36' }}>
                                <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                            </Box>
                            <List sx={{ width: 250, bgcolor: mode === 'light' ? 'white' : '#212B36', height: '100vh' }}>
                                {menuItems.map((item, index) => (
                                    <Link href={item.href}>
                                        <Button
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontWeight: 'bold',
                                                color: mode === 'light' ? 'black' : 'white',
                                            }}
                                            onClick={drawerClose}
                                        >
                                            <ListItem button key={index}>
                                                <ListItemText primary={item.text} />
                                            </ListItem>
                                        </Button>
                                    </Link>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Stack direction='row' spacing={3} sx={{ mx: "100px" }}>
                        {menuItems.map((item, index) => (
                            <Link href={item.href}>
                                <Button
                                    key={index}
                                    variant={item.variant || "text"}
                                    sx={{
                                        color: item.variant ? (item.variant === 'contained' ? 'white' : (mode === 'light' ? '#212B36' : '#E0E0E0')) : (mode === 'light' ? '#212B36' : '#E0E0E0'),
                                        borderColor: item.variant === 'outlined' ? (mode === 'light' ? '#212B36' : '#E0E0E0') : 'none',
                                        backgroundColor: item.variant === 'contained' ? (mode === 'light' ? '#212B36' : '#555') : 'none',
                                        textTransform: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {item.text}
                                </Button>
                            </Link>

                        ))}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                        </Box>
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
};
