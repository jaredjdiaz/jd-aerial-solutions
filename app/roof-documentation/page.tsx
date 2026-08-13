import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roof Documentation | Albuquerque, NM | JD Aerial Solutions",
  description: "Drone roof inspection imagery and aerial visual documentation for roofs and hard-to-reach exteriors in Albuquerque, New Mexico.",
  alternates: { canonical: "/roof-documentation" },
  openGraph: { url: "/roof-documentation", title: "Roof Documentation | Albuquerque, NM | JD Aerial Solutions", description: "Drone roof inspection imagery and aerial visual documentation for roofs and hard-to-reach exteriors in Albuquerque, New Mexico." },
  twitter: { title: "Roof Documentation | Albuquerque, NM | JD Aerial Solutions", description: "Drone roof inspection imagery and aerial visual documentation for roofs and hard-to-reach exteriors in Albuquerque, New Mexico." },
};

const benefits = [
  ["01", "See more of the property", "Aerial coverage provides a clear perspective of the roof, building exterior, and surrounding site from above."],
  ["02", "Review visible details", "Capture a clear visual reference that is easy to review, save, and share with the right professional."],
  ["03", "Cover hard-to-reach structures", "Capture useful visual documentation of building exteriors, towers, and elevated structures without relying on a ground-only perspective."],
];

const deliverables = [
  "High-resolution drone roof inspection imagery",
  "Visual documentation for building exteriors, towers, and elevated structures",
  "Straight-down and angled views when practical for the property",
  "Site-context images that show the full building clearly",
  "Organized digital delivery for easy review and sharing",
];

export default function RoofDocumentationPage() {
  return <main className="service-page">
    <Navbar />
    <section className="service-page-hero">
      <div className="service-page-hero-copy">
        <div className="service-page-hero-heading"><p className="service-kicker">Roof documentation photography</p><h1>A clearer view <em>from above.</em></h1></div>
        <div className="service-page-hero-details"><p>High-resolution drone imagery helps property owners, roofers, and project teams review visible roof details and document hard-to-reach areas from a better perspective.</p><div className="service-page-actions"><Link href="/contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">&rarr;</i></Link><Link href="/#services" className="outline-button">All Services</Link></div></div>
      </div>
      <div className="service-page-image"><Image src="/images/jd-aerial-hero.png" alt="Aerial view of a construction development at sunset with mountains in the distance" fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>
    <section className="service-page-section service-intro">
      <p className="section-label">Why aerial roof documentation</p>
      <div><h2>Useful imagery, clearly organized.</h2><p>Drone roof inspection imagery helps contractors, property managers, and building owners maintain a clear visual record of visible roof areas. Whether you are planning work, recording visible conditions, or sharing project context, aerial photography gives you a strong visual reference without relying only on ground-level photos.</p></div>
    </section>
    <section className="service-page-section service-benefits"><header><p className="section-label">Built around your project</p><h2>The perspective that ground photos miss.</h2></header><div className="benefit-grid">{benefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="service-page-section service-deliverables"><div><p className="section-label">What you receive</p><h2>Ready when you need to share it.</h2><p>Every project is planned around the property, the visuals you need, and a straightforward delivery that is easy to use.</p></div><ul>{deliverables.map((item) => <li key={item}><span aria-hidden="true">&#10003;</span>{item}</li>)}</ul></section>
    <section className="service-page-section service-process"><header><p className="section-label">How it works</p><h2>Simple from quote to delivery.</h2></header><div><article><span>01</span><h3>Tell us about the property</h3><p>Share the address, the type of imagery you need, and any project context that will help us plan the flight.</p></article><article><span>02</span><h3>Plan the coverage</h3><p>We coordinate the timing, property access, and relevant site considerations before the scheduled flight.</p></article><article><span>03</span><h3>Receive your imagery</h3><p>Get a clean, organized set of aerial visuals ready to review and share with your team.</p></article></div></section>
    <section className="service-page-section service-faq"><p className="section-label">Common questions</p><details open><summary>What can drone roof inspection imagery be used for?</summary><p>It is useful for visual records, project planning, contractor communication, property documentation, and providing a clearer view of visible roof details, exteriors, towers, or sites.</p></details><details><summary>Can you document building exteriors and towers?</summary><p>Yes. Aerial imagery can provide useful visual coverage of building exteriors, elevated structures, and towers when site conditions and airspace allow.</p></details><details><summary>Does this include a licensed roof or home inspection report?</summary><p>No. JD Aerial Solutions provides aerial imaging and visual documentation of visible areas. It does not include engineering opinions, code-compliance reviews, licensed home-inspection reports, or determinations of roof or property condition.</p></details><details><summary>Do you need access to the roof or structure?</summary><p>Typically, no roof or structure access is needed for aerial photography. We will coordinate any needed property access and site requirements before the flight.</p></details></section>
    <section className="service-page-cta"><p>Ready for a better view of your property?</p><h2>Let&apos;s capture the visuals that help move the project forward.</h2><Link href="/contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">&rarr;</i></Link></section>
    <Footer />
  </main>;
}
