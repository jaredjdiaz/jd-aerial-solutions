import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import PortfolioImageCard from "@/components/PortfolioImageCard";
import Link from "next/link";

type ServiceIconName = "construction" | "roof" | "mapping" | "model" | "site" | "commercial" | "land";

const services: { icon: ServiceIconName; title: string; description: string; href?: string }[] = [
  { icon: "construction", title: "Construction Progress", description: "Track progress, keep projects on schedule, and document every phase from start to finish.", href: "/construction-progress" },
  { icon: "roof", title: "Roof Documentation", description: "Aerial roof inspection imagery and visual documentation for roofs and hard-to-reach structures.", href: "/roof-documentation" },
  { icon: "model", title: "3D Models", description: "Visual 3D models of buildings, structures, and sites created from aerial imagery.", href: "/3d-models" },
  { icon: "site", title: "Site Overview Imagery", description: "High-resolution aerial overviews that help teams, clients, and stakeholders see the full site clearly.", href: "/site-overview-imagery" },
  { icon: "commercial", title: "Commercial Properties", description: "Aerial photo, video, and social-ready vertical clips for property marketing, site overviews, and asset documentation.", href: "/commercial-properties" },
  { icon: "land", title: "Vacant Land & Development", description: "Aerial imagery and site-overview visuals for land marketing, planning conversations, and development context.", href: "/vacant-land-development" },
];
const work = [
  { title: "Mountain Cabin", detail: "Personal aerial study · Bayfield, Colorado", category: "Property marketing", image: "/images/colorado-springs-cabin.png", alt: "Aerial view of a mountain cabin near Bayfield, Colorado" },
  {
    title: "Metal Roof Documentation",
    detail: "Residential visual documentation study · Albuquerque, New Mexico",
    category: "Roof documentation",
    image: "/images/roof-documentation/metal-roof-documentation.jpg",
    alt: "Close aerial view of a residential metal roof and roof vent in Albuquerque, New Mexico",
  },
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JD Aerial Solutions",
  url: "https://jdaerialsolutions.com",
  email: "info@jdaerialsolutions.com",
  description: "Professional drone photography, aerial roof inspection imagery, construction progress photography, and property visuals in Albuquerque, New Mexico.",
  areaServed: { "@type": "City", name: "Albuquerque", address: { "@type": "PostalAddress", addressRegion: "NM", addressCountry: "US" } },
  serviceType: ["Construction progress photography", "Drone roof inspection imagery and visual documentation", "Aerial site overview imagery", "Commercial property aerial photo and video", "Aerial 3D models"],
};

function ServiceIcon({ icon }: { icon: ServiceIconName }) {
  const shared = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "construction") return <svg {...shared}><path d="M6 40h36" /><path d="M10 40V18h12v22" /><path d="M22 25h16v15" /><path d="M14 18V8h21" /><path d="M30 8v8" /><path d="M26 12h8" /></svg>;
  if (icon === "roof") return <svg {...shared}><path d="M5 25 24 8l19 17" /><path d="M10 22v18h28V22" /><path d="M18 40V29h12v11" /><circle cx="36" cy="16" r="5" /><path d="m39.5 19.5 4 4" /></svg>;
  if (icon === "mapping") return <svg {...shared}><path d="m7 11 11-4 12 4 11-4v29l-11 5-12-4-11 4Z" /><path d="M18 7v30M30 11v30" /><circle cx="24" cy="22" r="4" /></svg>;
  if (icon === "model") return <svg {...shared}><path d="m24 5 15 8.5v21L24 43 9 34.5v-21Z" /><path d="m9 13.5 15 9 15-9M24 22.5V43" /><path d="m18 8.5 15 8.5" /></svg>;
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
  if (icon === "fast") return <svg {...shared}><circle cx="27" cy="24" r="14" /><path d="M27 16v8l5 3" /><path d="M5 17h9M5 24h6M5 31h9" /></svg>;
  if (icon === "accurate") return <svg {...shared}><circle cx="24" cy="24" r="13" /><circle cx="24" cy="24" r="4" /><path d="M24 5v6m0 26v6M5 24h6m26 0h6" /></svg>;
  if (icon === "reports") return <svg {...shared}><path d="M13 5h18l6 6v32H13Z" /><path d="M31 5v8h8M19 20h12m-12 6h12m-12 6h7" /><path d="m19 36 3 3 6-7" /></svg>;
  return <svg {...shared}><path d="M24 5 39 11v11c0 10-6.4 16.8-15 21-8.6-4.2-15-11-15-21V11Z" /><path d="m17 24 5 5 10-11" /></svg>;
}

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navbar />
    <Hero />
    <section className="credentials" data-reveal><div><span className="credential-icon"><CredentialIcon icon="certified" /></span><span>FAA Part 107<br />Certified</span></div><div><span className="credential-icon"><CredentialIcon icon="local" /></span><span>Albuquerque,<br />New Mexico</span></div><div><span className="credential-icon"><CredentialIcon icon="safety" /></span><span>Safety<br />Focused</span></div><div><span className="credential-icon"><CredentialIcon icon="deliverables" /></span><span>Clear Project<br />Deliverables</span></div></section>
    <section id="services" className="content-section"><header className="section-heading" data-reveal><p>What we do</p><h2>Services</h2></header><div className="service-grid">{services.map(({ icon, title, description, href }) => <article key={title} data-reveal><span className="service-icon"><ServiceIcon icon={icon} /></span><h3>{title}</h3><p>{description}</p><Link className="service-card-link" href={href ?? "#contact"}>{href ? "Learn more" : "Ask about this"}<span aria-hidden="true">→</span></Link></article>)}</div><aside className="capability-note" data-reveal><span className="capability-icon"><ServiceIcon icon="mapping" /></span><div><p>Expanding capability</p><h3>Aerial Mapping</h3><span>Accurate mapping requires a specialized capture and accuracy workflow. Contact us to discuss your project and current availability.</span></div><a href="#contact">Ask About Mapping</a></aside></section>
    <section id="portfolio" className="portfolio content-section"><header className="section-heading"><p>Selected flights</p><h2>Recent Work</h2></header><div className="work-grid">{work.map((item) => <PortfolioImageCard key={item.title} {...item} />)}</div><a className="portfolio-button" href="#contact">Ask About Your Project</a></section>
    <section id="about" className="about-band"><div><p>Why work with JD Aerial Solutions?</p><h2>Precision from above.<br />Results you can build on.</h2></div><div className="reasons"><span><i className="reason-icon"><ReasonIcon icon="local" /></i><b>Local &amp;<br />Reliable</b></span><span><i className="reason-icon"><ReasonIcon icon="fast" /></i><b>Fast<br />Turnaround</b></span><span><i className="reason-icon"><ReasonIcon icon="accurate" /></i><b>Clear Aerial<br />Visuals</b></span><span><i className="reason-icon"><ReasonIcon icon="reports" /></i><b>Clear<br />Deliverables</b></span><span><i className="reason-icon"><ReasonIcon icon="safe" /></i><b>Safety<br />Focused</b></span></div></section>
    <section id="contact" className="contact-section"><div className="contact-copy"><p className="gold-kicker">Let’s work together</p><h2>Have a project in mind?</h2><p>Tell us what you need to see from above. We&apos;ll follow up with a straightforward plan and quote.</p><a className="contact-email" href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a><span>Albuquerque, New Mexico</span></div><QuoteForm /></section>
    <Footer />
  </main>;
}
