import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "JD Aerial Solutions | Drone Documentation & Mapping", description: "Professional drone documentation, aerial mapping, and commercial imagery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>; }
