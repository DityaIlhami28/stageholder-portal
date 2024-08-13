"use client";

import LandingPagePrice from "@/components/pricing/landingPagePrice";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import React from "react";

export default function Pricing() {
    const theme = useTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#121212', // Full background color
                    }}>
                    <Box>

                        <LandingPagePrice />
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}