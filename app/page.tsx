import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";

const services = [
  ["▥", "Construction Progress", "Track progress, keep projects on schedule, and document every phase from start to finish."],
  ["⌂", "Roof Documentation", "High-resolution roof inspections and reports for contractors, insurance, and property owners."],
  ["▦", "Mapping & 3D Models", "Orthomosaic maps, 3D models, and measurements for better planning and accurate results."],
  ["▤", "Commercial Properties", "Marketing imagery, site overviews, and asset documentation that helps your business stand out."],
  ["⌁", "Vacant Land & Development", "Topographic maps, site analysis, and visuals to support land planning and development."],
];
const work = ["Construction Progress", "Roof Documentation", "Orthomosaic Map", "3D Model"];

export default function Home() {
  return <main>
    <Navbar />
    <Hero />
    <section className="credentials"><div>◎ <span>FAA Part 107<br />Certified</span></div><div>◇ <span>Fully Insured</span></div><div>⌖ <span>Albuquerque<br />Based</span></div><div>♢ <span>Reliable. Local.<br />Professional.</span></div></section>
    <section id="services" className="content-section"><header className="section-heading"><p>What we do</p><h2>Our Services</h2></header><div className="service-grid">{services.map(([icon, title, description]) => <article key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section id="portfolio" className="portfolio content-section"><header className="section-heading"><p>Selected flights</p><h2>Recent Work</h2></header><div className="work-grid">{work.map((title, index) => <article className={`work-card work-${index + 1}`} key={title}><span>JD Aerial</span><div><b>{title}</b><small>Image placeholder</small></div></article>)}</div><a className="portfolio-button" href="#contact">View Full Portfolio</a></section>
    <section id="about" className="about-band"><div><p>Why work with JD Aerial Solutions?</p><h2>Precision from above.<br />Results you can build on.</h2></div><div className="reasons"><span>⌖<b>Local &amp;<br />Reliable</b></span><span>◷<b>Fast<br />Turnaround</b></span><span>◎<b>Accurate<br />Data</b></span><span>▤<b>Professional<br />Reports</b></span><span>◇<b>Safety<br />Focused</b></span></div></section>
    <section id="contact" className="contact-section"><div><p className="gold-kicker">Let’s work together</p><h2>Have a project in mind?</h2><p>Let&apos;s talk about how we can help you see it from a better angle.</p></div><div className="contact-details"><a href="tel:+15051234567">(505) 123-4567</a><a href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a><span>Albuquerque, New Mexico</span><a className="blue-button" href="mailto:info@jdaerialsolutions.com">Get a quote</a></div></section>
    <footer><a className="logo footer-logo" href="#home"><Image src="/images/jd-aerial-logo.png" alt="JD Aerial Solutions" width={1536} height={1024} /></a><span>© {new Date().getFullYear()} JD Aerial Solutions, LLC. All rights reserved.</span></footer>
  </main>;
}
