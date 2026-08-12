import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About | JD Aerial Solutions",
  description: "Meet Jared Diaz, FAA Part 107 Remote Pilot and owner of JD Aerial Solutions in Albuquerque, New Mexico.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About JD Aerial Solutions", description: "Meet Jared Diaz, FAA Part 107 Remote Pilot and owner of JD Aerial Solutions in Albuquerque, New Mexico." },
  twitter: { title: "About JD Aerial Solutions", description: "Meet Jared Diaz, FAA Part 107 Remote Pilot and owner of JD Aerial Solutions in Albuquerque, New Mexico." },
};

const values = [
  ["Clear communication", "You will know what to expect before the flight and what you will receive after it."],
  ["Purposeful visuals", "Every flight is planned around the question you need the imagery to answer."],
  ["Safety-minded operations", "Flights are approached with site awareness, preparation, and respect for the surrounding environment."],
];

export default function AboutPage() {
  return <main className="about-page">
    <Navbar />
    <section className="about-hero">
      <div className="about-hero-grid" aria-hidden="true" />
      <div className="about-hero-copy">
        <p>About JD Aerial Solutions</p>
        <h1>A better view starts with a thoughtful flight.</h1>
        <span>Professional aerial photo, video, and visual documentation based in Albuquerque, New Mexico.</span>
      </div>
    </section>
    <section className="about-intro">
      <div><p className="about-kicker">Meet the pilot</p><h2>Thoughtful flights.<br />Useful visuals.</h2></div>
      <div className="about-portrait"><Image src="/images/jared-diaz-portrait-upscaled.png" alt="Jared Diaz, owner and FAA Part 107 Remote Pilot at JD Aerial Solutions" width={1254} height={1254} priority /></div>
      <div className="about-intro-copy"><h3>Jared Diaz</h3><p>JD Aerial Solutions is an Albuquerque-based aerial media and visual documentation company founded and operated by Jared Diaz, an FAA Part 107 Remote Pilot.</p><p>With a professional IT background, Jared brings a technical, detail-oriented approach to every project. He enjoys using drone technology, visual data, and thoughtful planning to help clients see properties and projects more clearly.</p><p>The goal is straightforward: give property owners, project teams, and businesses a clear view of what matters from above.</p><Link href="/#contact" className="blue-button quote-hero"><span>Start a conversation</span><i aria-hidden="true">→</i></Link></div>
    </section>
    <section className="about-values">
      <header><p className="about-kicker">How I work</p><h2>Built for clear decisions.</h2><span>Whether the need is progress documentation, a site overview, or property visuals, the focus stays on useful deliverables and a smooth process.</span></header>
      <div>{values.map(([title, detail], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>
    <section className="about-cta"><p>Ready when you are</p><h2>Let&apos;s get a better perspective on your project.</h2><Link href="/#contact" className="blue-button quote-hero"><span>Get a free quote</span><i aria-hidden="true">→</i></Link></section>
    <Footer />
  </main>;
}
