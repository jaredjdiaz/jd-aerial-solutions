import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer>
    <Link className="logo footer-logo" href="/"><Image src="/images/jd-logo-lockup-clean.png" alt="JD Aerial Solutions" width={1774} height={887} /></Link>
    <div className="footer-meta"><span>&copy; {new Date().getFullYear()} JD Aerial Solutions, LLC. All rights reserved.</span><Link href="/about">About</Link><a className="footer-social" href="https://www.facebook.com/people/JD-Aerial-Solutions/61594337489275/" target="_blank" rel="noopener noreferrer" aria-label="JD Aerial Solutions on Facebook"><svg viewBox="0 0 320 512" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a><Link href="/privacy">Privacy Policy</Link></div>
  </footer>;
}
