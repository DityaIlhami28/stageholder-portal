'use client'

import { AppBar, Toolbar, IconButton, Stack, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from "@mui/material";
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
        setOpenDrawer(true)
    }

    const drawerClose = () => {
        setOpenDrawer(false)
    }

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
                <Image
                    src={LOGO}
                    alt="Stageholder Logo"
                    width={50}
                    height={50}
                    style={{ marginRight: "auto", marginLeft: "30px" }}
                />
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
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
                        <Link href="/" passHref>
                            <Button sx={{ color: "#212B36", textTransform: "none", fontWeight: "bold" }}>Home</Button>
                        </Link>
                        <Link href="/features" passHref>
                            <Button sx={{ color: "#212B36", textTransform: "none", fontWeight: "bold" }}>Features</Button>
                        </Link>
                        <Link href="/about-us" passHref>
                            <Button sx={{ color: "#212B36", textTransform: "none", fontWeight: "bold" }}>About Us</Button>
                        </Link>
                        <Link href="/pricing" passHref>
                            <Button sx={{ color: "#212B36", textTransform: "none", fontWeight: "bold" }}>Pricing</Button>
                        </Link>
                        <Link href="/login" passHref>
                            <Button variant="outlined" sx={{ color: "#212B36", borderColor: "#212B36", textTransform: "none", fontWeight: "bold" }}>Login</Button>
                        </Link>
                        <Link href="/register" passHref>
                            <Button variant="contained" sx={{ backgroundColor: "#212B36", color: "white", textTransform: "none", fontWeight: "bold" }}>Register</Button>
                        </Link>
                    </Stack>
                )
                }
            </Toolbar>
        </AppBar>
    );
}