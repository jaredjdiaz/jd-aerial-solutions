import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://jdaerialsolutions.com"),
  title: { default: "Commercial Drone Documentation in Albuquerque | JD Aerial Solutions", template: "%s | JD Aerial Solutions" },
  description: "Commercial property documentation, construction progress imagery, and aerial site visuals for contractors, property managers, and developers in Albuquerque, New Mexico.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "JD Aerial Solutions", title: "Commercial Drone Documentation in Albuquerque | JD Aerial Solutions", description: "Commercial property documentation, construction progress imagery, and aerial site visuals for contractors, property managers, and developers in Albuquerque, New Mexico.", images: [{ url: "/images/jd-aerial-hero.png", alt: "JD Aerial Solutions aerial imagery" }] },
  twitter: { card: "summary_large_image", title: "Commercial Drone Documentation in Albuquerque | JD Aerial Solutions", description: "Commercial property documentation, construction progress imagery, and aerial site visuals in Albuquerque, New Mexico.", images: ["/images/jd-aerial-hero.png"] },
  icons: {
    icon: "/images/jd-drone-favicon.svg?v=1",
    shortcut: "/images/jd-drone-favicon.svg?v=1",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link rel="preconnect" href="https://challenges.cloudflare.com" /><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}<Analytics /></body></html>; }
