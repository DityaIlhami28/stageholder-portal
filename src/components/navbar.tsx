'use client';

import { AppBar, Toolbar, IconButton, Stack, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LOGO from '../assets/Stageholder_Logo-03.png';

interface MenuItem {
    text: string;
    href: string;
    variant?: 'text' | 'outlined' | 'contained';
}

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

    const menuItems: MenuItem[] = [
        { text: 'Home', href: 'home' },
        { text: 'Features', href: 'features' },
        { text: 'About Us', href: 'about-us' },
        { text: 'Pricing', href: 'pricing' },
        { text: 'Login', href: 'login', variant: 'outlined' },
        { text: 'Register', href: 'register', variant: 'contained' }
    ];

    // Create refs for each section
    const sectionsRef = menuItems.reduce((acc, item) => {
        acc[item.href] = useRef<HTMLDivElement>(null);
        return acc;
    }, {} as Record<string, React.RefObject<HTMLDivElement>>);

    const handleScroll = (href: string) => {
        console.log(`Scrolling to ${href}`); // Debugging
        const section = sectionsRef[href].current;
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`No element found with ID ${href}`);
        }
    };

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
                            sx={{ color: "black" }}
                            aria-label="menu"
                            onClick={drawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={openDrawer} onClose={drawerClose}>
                            <List sx={{ width: 250 }}>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} onClick={() => { handleScroll(item.href); drawerClose(); }}>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Stack direction='row' spacing={3} sx={{ mx: "100px" }}>
                        {menuItems.map((item, index) => (
                            <Button
                                key={index}
                                variant={item.variant || "text"}
                                sx={{
                                    color: item.variant ? (item.variant === 'contained' ? 'white' : '#212B36') : '#212B36',
                                    borderColor: item.variant === 'outlined' ? '#212B36' : 'none',
                                    backgroundColor: item.variant === 'contained' ? '#212B36' : 'none',
                                    textTransform: 'none',
                                    fontWeight: 'bold'
                                }}
                                onClick={() => handleScroll(item.href)}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    );
};
