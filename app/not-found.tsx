import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Navbar />
      <section className="not-found-hero">
        <div className="not-found-grid" aria-hidden="true" />
        <div className="not-found-copy">
          <p>404 — Off course</p>
          <h1>This page isn&apos;t on the flight plan.</h1>
          <p>It may have moved, been renamed, or never existed. Let&apos;s get you back to a better view.</p>
          <div className="not-found-actions">
            <Link href="/" className="blue-button quote-hero"><span>Back to Home</span><i aria-hidden="true">&rarr;</i></Link>
            <Link href="/#services" className="outline-button">Explore Services</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
