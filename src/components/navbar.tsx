import { AppBar, Toolbar, IconButton, Stack, Button } from "@mui/material";
import Image from "next/image";
import LOGO from '../assets/Stageholder_Logo-03.png';
import Link from 'next/link';

export const MuiNavBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#E8EBEB", boxShadow: "none" }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
                <Image
                    src={LOGO}
                    alt="Stageholder Logo"
                    width={50}
                    height={50}
                    style={{ marginRight: "auto", marginLeft: "30px" }}
                />
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
            </Toolbar>
        </AppBar>
    );
}
