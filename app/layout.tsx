import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jdaerialsolutions.com"),
  title: { default: "JD Aerial Solutions | Drone Services in Albuquerque, NM", template: "%s | JD Aerial Solutions" },
  description: "Professional drone photography, aerial documentation, construction progress imagery, and property visuals in Albuquerque, New Mexico.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "JD Aerial Solutions", title: "JD Aerial Solutions | Drone Services in Albuquerque, NM", description: "Professional drone photography, aerial documentation, construction progress imagery, and property visuals in Albuquerque, New Mexico.", images: [{ url: "/images/jd-aerial-hero.png", alt: "JD Aerial Solutions aerial imagery" }] },
  twitter: { card: "summary_large_image", title: "JD Aerial Solutions | Drone Services in Albuquerque, NM", description: "Professional drone photography and aerial documentation in Albuquerque, New Mexico.", images: ["/images/jd-aerial-hero.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>; }
