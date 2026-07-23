import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "JD Aerial Solutions | Drone Documentation & Mapping", description: "Professional drone documentation, aerial mapping, and commercial imagery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>; }
