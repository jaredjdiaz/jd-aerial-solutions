import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer>
    <Link className="logo footer-logo" href="/"><Image src="/images/jd-aerial-logo-lockup.png" alt="JD Aerial Solutions" width={1824} height={862} /></Link>
    <div className="footer-meta"><span>&copy; {new Date().getFullYear()} JD Aerial Solutions, LLC. All rights reserved.</span><Link href="/about">About</Link><Link href="/privacy">Privacy Policy</Link></div>
  </footer>;
}
