import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type ServicePageContent = {
  kicker: string;
  title: { before: string; emphasis: string };
  description: string;
  imageAlt: string;
  intro: { label: string; title: string; copy: string };
  benefits: { label: string; heading: string; items: { number: string; title: string; copy: string }[] };
  deliverables: { label: string; heading: string; copy: string; items: string[] };
  process: { label: string; heading: string; items: { number: string; title: string; copy: string }[] };
  faqs: { question: string; answer: string }[];
  cta: { kicker: string; heading: string };
};

export default function ServiceDetailPage({ content }: { content: ServicePageContent }) {
  return <main className="service-page">
    <Navbar />
    <section className="service-page-hero">
      <div className="service-page-hero-copy">
        <div className="service-page-hero-heading"><p className="service-kicker">{content.kicker}</p><h1>{content.title.before} <em>{content.title.emphasis}</em></h1></div>
        <div className="service-page-hero-details"><p>{content.description}</p><div className="service-page-actions"><Link href="/#contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">&rarr;</i></Link><Link href="/#services" className="outline-button">All Services</Link></div></div>
      </div>
      <div className="service-page-image"><Image src="/images/jd-aerial-hero.png" alt={content.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>
    <section className="service-page-section service-intro">
      <p className="section-label">{content.intro.label}</p>
      <div><h2>{content.intro.title}</h2><p>{content.intro.copy}</p></div>
    </section>
    <section className="service-page-section service-benefits"><header><p className="section-label">{content.benefits.label}</p><h2>{content.benefits.heading}</h2></header><div className="benefit-grid">{content.benefits.items.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
    <section className="service-page-section service-deliverables"><div><p className="section-label">{content.deliverables.label}</p><h2>{content.deliverables.heading}</h2><p>{content.deliverables.copy}</p></div><ul>{content.deliverables.items.map((item) => <li key={item}><span aria-hidden="true">&#10003;</span>{item}</li>)}</ul></section>
    <section className="service-page-section service-process"><header><p className="section-label">{content.process.label}</p><h2>{content.process.heading}</h2></header><div>{content.process.items.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
    <section className="service-page-section service-faq"><p className="section-label">Common questions</p>{content.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    <section className="service-page-cta"><p>{content.cta.kicker}</p><h2>{content.cta.heading}</h2><Link href="/#contact" className="blue-button quote-hero"><span>Get a Free Quote</span><i aria-hidden="true">&rarr;</i></Link></section>
    <Footer />
  </main>;
}
