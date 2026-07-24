import Image from "next/image";

const links = ["Home", "Services", "Portfolio", "About", "Contact"];

export default function Navbar() {
  return <header className="site-header">
    <a href="#home" className="logo" aria-label="JD Aerial Solutions home"><Image src="/images/jd-aerial-logo-lockup.png" alt="JD Aerial Solutions" width={1824} height={862} priority /></a>
    <nav>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
    <a href="#contact" className="quote-button"><span>Get a Quote</span><i aria-hidden="true">↗</i></a>
  </header>;
}
