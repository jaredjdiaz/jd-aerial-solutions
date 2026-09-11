import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer>
    <Link className="logo footer-logo" href="/"><Image src="/images/jd-logo-lockup-clean.png" alt="JD Aerial Solutions" width={1774} height={887} /></Link>
    <div className="footer-meta"><span>&copy; {new Date().getFullYear()} JD Aerial Solutions, LLC. All rights reserved.</span><Link href="/about">About</Link><a href="https://www.facebook.com/people/JD-Aerial-Solutions/61594337489275/" target="_blank" rel="noopener noreferrer">Facebook</a><Link href="/privacy">Privacy Policy</Link></div>
  </footer>;
}
