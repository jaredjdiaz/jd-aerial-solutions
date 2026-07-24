import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";

type ServiceIconName = "construction" | "roof" | "mapping" | "site" | "commercial" | "land";

const services: { icon: ServiceIconName; title: string; description: string }[] = [
  { icon: "construction", title: "Construction Progress", description: "Track progress, keep projects on schedule, and document every phase from start to finish." },
  { icon: "roof", title: "Roof Documentation", description: "High-resolution aerial roof imagery and documentation for contractors, insurance professionals, and property owners." },
  { icon: "site", title: "Site Overview Imagery", description: "High-resolution aerial overviews that help teams, clients, and stakeholders see the full site clearly." },
  { icon: "commercial", title: "Commercial Properties", description: "Marketing imagery, site overviews, and asset documentation that helps your business stand out." },
  { icon: "land", title: "Vacant Land & Development", description: "Topographic maps, site analysis, and visuals to support land planning and development." },
];
const work = ["Construction Progress", "Roof Documentation", "Orthomosaic Map", "3D Model"];

function ServiceIcon({ icon }: { icon: ServiceIconName }) {
  const shared = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "construction") return <svg {...shared}><path d="M6 40h36" /><path d="M10 40V18h12v22" /><path d="M22 25h16v15" /><path d="M14 18V8h21" /><path d="M30 8v8" /><path d="M26 12h8" /></svg>;
  if (icon === "roof") return <svg {...shared}><path d="M5 25 24 8l19 17" /><path d="M10 22v18h28V22" /><path d="M18 40V29h12v11" /><circle cx="36" cy="16" r="5" /><path d="m39.5 19.5 4 4" /></svg>;
  if (icon === "mapping") return <svg {...shared}><path d="m7 11 11-4 12 4 11-4v29l-11 5-12-4-11 4Z" /><path d="M18 7v30M30 11v30" /><circle cx="24" cy="22" r="4" /></svg>;
  if (icon === "site") return <svg {...shared}><rect x="6" y="12" width="36" height="27" rx="3" /><path d="M14 12 17 8h14l3 4" /><circle cx="31" cy="25" r="5" /><path d="m9 35 9-9 6 6 4-4 11 7" /></svg>;
  if (icon === "commercial") return <svg {...shared}><path d="M10 40V12h18v28" /><path d="M28 40V20h10v20" /><path d="M5 40h38" /><path d="M15 18h3m-3 6h3m-3 6h3m18-4h3m-3 6h3" /><path d="M32 12V7h6v13" /></svg>;
  return <svg {...shared}><path d="M6 36c7-8 12 5 20-4s11 4 16-3" /><path d="M6 42c9-7 14 4 22-3s9 3 14-2" /><path d="M13 27c5-5 8 3 13-3s7 2 11-2" /><path d="M24 6c-4 0-7 3-7 7 0 6 7 12 7 12s7-6 7-12c0-4-3-7-7-7Z" /><circle cx="24" cy="13" r="2" /></svg>;
}

type CredentialIconName = "certified" | "local" | "safety" | "deliverables";

function CredentialIcon({ icon }: { icon: CredentialIconName }) {
  const shared = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "certified") return <svg {...shared}><circle cx="24" cy="20" r="13" /><path d="m18 20 4 4 8-9" /><path d="m18 32-3 10 9-4 9 4-3-10" /></svg>;
  if (icon === "local") return <svg {...shared}><path d="M24 43s13-12.4 13-23a13 13 0 1 0-26 0c0 10.6 13 23 13 23Z" /><circle cx="24" cy="20" r="4" /></svg>;
  if (icon === "safety") return <svg {...shared}><path d="M24 5 39 11v11c0 10-6.4 16.8-15 21-8.6-4.2-15-11-15-21V11Z" /><path d="m17 24 5 5 10-11" /></svg>;
  return <svg {...shared}><path d="M13 5h18l6 6v32H13Z" /><path d="M31 5v8h8M19 20h12m-12 6h12m-12 6h7" /><path d="m19 36 3 3 6-7" /></svg>;
}

type ReasonIconName = "local" | "fast" | "accurate" | "reports" | "safe";

function ReasonIcon({ icon }: { icon: ReasonIconName }) {
  const shared = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "local") return <svg {...shared}><path d="M24 43s13-12.4 13-23a13 13 0 1 0-26 0c0 10.6 13 23 13 23Z" /><circle cx="24" cy="20" r="4" /></svg>;
  if (icon === "fast") return <svg {...shared}><circle cx="24" cy="25" r="16" /><path d="M24 15v10l7 4" /><path d="m27 4-5 7h5l-5 7" /></svg>;
  if (icon === "accurate") return <svg {...shared}><circle cx="24" cy="24" r="13" /><circle cx="24" cy="24" r="4" /><path d="M24 5v6m0 26v6M5 24h6m26 0h6" /></svg>;
  if (icon === "reports") return <svg {...shared}><path d="M13 5h18l6 6v32H13Z" /><path d="M31 5v8h8M19 20h12m-12 6h12m-12 6h7" /><path d="m19 36 3 3 6-7" /></svg>;
  return <svg {...shared}><path d="M24 5 39 11v11c0 10-6.4 16.8-15 21-8.6-4.2-15-11-15-21V11Z" /><path d="m17 24 5 5 10-11" /></svg>;
}

export default function Home() {
  return <main>
    <Navbar />
    <Hero />
    <section className="credentials" data-reveal><div><span className="credential-icon"><CredentialIcon icon="certified" /></span><span>FAA Part 107<br />Certified</span></div><div><span className="credential-icon"><CredentialIcon icon="local" /></span><span>Albuquerque,<br />New Mexico</span></div><div><span className="credential-icon"><CredentialIcon icon="safety" /></span><span>Safety<br />Focused</span></div><div><span className="credential-icon"><CredentialIcon icon="deliverables" /></span><span>Clear Project<br />Deliverables</span></div></section>
    <section id="services" className="content-section"><header className="section-heading" data-reveal><p>What we do</p><h2>Our Services</h2></header><div className="service-grid">{services.map(({ icon, title, description }) => <article key={title} data-reveal><span className="service-icon"><ServiceIcon icon={icon} /></span><h3>{title}</h3><p>{description}</p></article>)}</div><aside className="capability-note" data-reveal><span className="capability-icon"><ServiceIcon icon="mapping" /></span><div><p>Expanding capabilities</p><h3>Interested in aerial mapping or 3D visualization?</h3><span>Contact us to discuss your project, scope, and current availability.</span></div><a href="#contact">Discuss a project</a></aside></section>
    <section id="portfolio" className="portfolio content-section"><header className="section-heading"><p>Selected flights</p><h2>Recent Work</h2></header><div className="work-grid">{work.map((title, index) => <article className={`work-card work-${index + 1}`} key={title}><span>JD Aerial</span><div><b>{title}</b><small>Image placeholder</small></div></article>)}</div><a className="portfolio-button" href="#contact">View Full Portfolio</a></section>
    <section id="about" className="about-band"><div><p>Why work with JD Aerial Solutions?</p><h2>Precision from above.<br />Results you can build on.</h2></div><div className="reasons"><span><i className="reason-icon"><ReasonIcon icon="local" /></i><b>Local &amp;<br />Reliable</b></span><span><i className="reason-icon"><ReasonIcon icon="fast" /></i><b>Fast<br />Turnaround</b></span><span><i className="reason-icon"><ReasonIcon icon="accurate" /></i><b>Clear Aerial<br />Visuals</b></span><span><i className="reason-icon"><ReasonIcon icon="reports" /></i><b>Clear<br />Deliverables</b></span><span><i className="reason-icon"><ReasonIcon icon="safe" /></i><b>Safety<br />Focused</b></span></div></section>
    <section id="contact" className="contact-section"><div><p className="gold-kicker">Let’s work together</p><h2>Have a project in mind?</h2><p>Let&apos;s talk about how we can help you see it from a better angle.</p></div><div className="contact-details"><a href="tel:+15051234567">(505) 123-4567</a><a href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a><span>Albuquerque, New Mexico</span><a className="blue-button quote-contact" href="mailto:info@jdaerialsolutions.com"><span>Get a Free Quote</span><i aria-hidden="true">→</i></a></div></section>
    <footer><a className="logo footer-logo" href="#home"><Image src="/images/jd-aerial-logo-lockup.png" alt="JD Aerial Solutions" width={1824} height={862} /></a><span>© {new Date().getFullYear()} JD Aerial Solutions, LLC. All rights reserved.</span></footer>
  </main>;
}
