import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction Progress Photography | JD Aerial Solutions",
  description: "Aerial construction progress photography and project documentation for teams in Albuquerque, New Mexico.",
};

const benefits = [
  ["01", "See the full site", "Aerial coverage provides a clear, high-level view that ground photos alone cannot capture."],
  ["02", "Share progress clearly", "Give clients, stakeholders, and remote team members an easy way to understand the current stage of work."],
  ["03", "Create a visual record", "Build an organized timeline of the project as it moves from early site work through completion."],
];

const deliverables = [
  "High-resolution aerial still photography",
  "Wide site-overview imagery",
  "One-time or recurring coverage around project milestones",
  "Organized image delivery for simple sharing",
];

export default function ConstructionProgressPage() {
  return <main className="service-page">
    <Navbar />
    <section className="service-page-hero">
      <div className="service-page-hero-copy">
        <div className="service-page-hero-heading"><p className="service-kicker">Construction progress photography</p><h1>Keep every phase <em>in view.</em></h1></div>
        <div className="service-page-hero-details"><p>Clear aerial imagery helps construction teams document progress, share site context, and keep the right people up to date.</p><div className="service-page-actions"><Link href="/contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">→</i></Link><Link href="/#services" className="outline-button">All Services</Link></div></div>
      </div>
      <div className="service-page-image"><Image src="/images/jd-aerial-hero.png" alt="Aerial view of a construction development at sunset with mountains in the distance" fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>
    <section className="service-page-section service-intro">
      <p className="section-label">Why aerial progress coverage</p>
      <div><h2>A better perspective on what&apos;s happening on site.</h2><p>From a single milestone flight to recurring documentation, aerial imagery gives your team a straightforward visual reference for the work in progress.</p></div>
    </section>
    <section className="service-page-section service-benefits"><header><p className="section-label">Built for the job site</p><h2>Useful from every angle.</h2></header><div className="benefit-grid">{benefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="service-page-section service-deliverables"><div><p className="section-label">What you receive</p><h2>Coverage that&apos;s ready to share.</h2><p>We tailor each flight around the site, the project schedule, and the people who need to see the work.</p></div><ul>{deliverables.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></section>
    <section className="service-page-section service-process"><header><p className="section-label">How it works</p><h2>Simple from quote to delivery.</h2></header><div><article><span>01</span><h3>Share the project</h3><p>Tell us where the site is, what you need to show, and when the coverage is most useful.</p></article><article><span>02</span><h3>Coordinate the flight</h3><p>We work around site activity and access requirements to plan a safe, efficient capture.</p></article><article><span>03</span><h3>Receive your imagery</h3><p>Get an organized set of aerial visuals that your team can review and share.</p></article></div></section>
    <section className="service-page-section service-faq"><p className="section-label">Common questions</p><details open><summary>How often should a project be documented?</summary><p>That depends on your project. Some teams need a one-time overview, while others schedule coverage around key milestones.</p></details><details><summary>Can you work around an active construction site?</summary><p>Yes. We coordinate with the site team on access, timing, and any relevant safety considerations before the flight.</p></details><details><summary>Is this a substitute for a licensed survey?</summary><p>No. Construction progress photography is visual documentation and is not presented as a licensed surveying or engineering service.</p></details></section>
    <section className="service-page-cta"><p>Ready for a better view of your project?</p><h2>Let&apos;s document the work as it takes shape.</h2><Link href="/contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">→</i></Link></section>
    <Footer />
  </main>;
}
