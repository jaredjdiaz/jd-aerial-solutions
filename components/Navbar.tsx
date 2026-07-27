"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const desktopLinks = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Portfolio", "/#portfolio"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

const mobileLinks = [
  ["Home", "/"],
  ["Portfolio", "/#portfolio"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

const serviceLinks = [
  ["Construction Progress", "/construction-progress"],
  ["Roof Documentation", "/roof-documentation"],
  ["3D Models", "/3d-models"],
  ["Site Overview Imagery", "/site-overview-imagery"],
  ["Commercial Properties", "/commercial-properties"],
  ["Vacant Land & Development", "/vacant-land-development"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); };

  return <header className="site-header">
    <Link href="/" className="logo" aria-label="JD Aerial Solutions home" onClick={closeMenu}><Image src="/images/jd-aerial-logo-lockup.png" alt="JD Aerial Solutions" width={1824} height={862} priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{desktopLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
    <Link href="/#contact" className="quote-button desktop-quote"><span>Get a Quote</span><i aria-hidden="true">↗</i></Link>
    <button type="button" className={`menu-toggle${menuOpen ? " is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
    <div id="mobile-navigation" className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {mobileLinks.slice(0, 1).map(([label, href]) => <Link key={label} href={href} onClick={closeMenu}>{label}</Link>)}
        <button type="button" className={`mobile-services-toggle${servicesOpen ? " is-open" : ""}`} aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}><span>Services</span><i aria-hidden="true" /></button>
        <div className={`mobile-service-links${servicesOpen ? " is-open" : ""}`}>
          <Link href="/#services" onClick={closeMenu}>View All Services</Link>
          {serviceLinks.map(([label, href]) => <Link key={label} href={href} onClick={closeMenu}>{label}</Link>)}
        </div>
        {mobileLinks.slice(1).map(([label, href]) => <Link key={label} href={href} onClick={closeMenu}>{label}</Link>)}
      </nav>
      <Link href="/#contact" className="mobile-quote" onClick={closeMenu}>Get a Free Quote</Link>
    </div>
  </header>;
}
