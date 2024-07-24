import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MuiNavBar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Divider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiNavBar />
        {children}</body>
        <Divider/>
        <Footer/>
    </html>
  );
}
