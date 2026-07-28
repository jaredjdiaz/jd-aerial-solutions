import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for JD Aerial Solutions.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main className="privacy-page">
    <Navbar />
    <section className="privacy-hero"><p>JD Aerial Solutions</p><h1>Privacy Policy</h1><span>Last updated: July 28, 2026</span></section>
    <article className="privacy-content">
      <p>JD Aerial Solutions, LLC ("we," "us," or "our") respects your privacy. This policy explains how we handle information submitted through jdaerialsolutions.com.</p>
      <section><h2>Information we collect</h2><p>When you request a quote, we may collect your name, company name, email address, phone number, project location, service interest, and the project details you choose to provide.</p></section>
      <section><h2>How we use it</h2><p>We use this information to respond to your inquiry, prepare a quote, communicate about a potential or active project, and maintain reasonable business records. Please do not submit sensitive personal, financial, medical, or account information through the quote form.</p></section>
      <section><h2>How information is handled</h2><p>We use trusted service providers to operate our website, deliver quote requests, and manage business communications. They may process information only as needed to provide those services to us. We do not sell your personal information or use it for advertising-based tracking.</p></section>
      <section><h2>Cookies and analytics</h2><p>This site does not currently use advertising or analytics cookies. If that changes, we will update this policy and provide any notice or choices required by applicable law.</p></section>
      <section><h2>Retention and security</h2><p>We keep inquiry information only as long as reasonably necessary to respond to you, provide services, meet legal or recordkeeping obligations, or resolve disputes. We use reasonable safeguards, but no online service can guarantee absolute security.</p></section>
      <section><h2>Your choices</h2><p>You may ask us to access, correct, or delete the personal information we hold about you by emailing <a href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a>. We will respond as required by applicable law.</p></section>
      <section><h2>Children&apos;s privacy</h2><p>This website and our services are not directed to children under 13, and we do not knowingly collect personal information from children.</p></section>
      <section><h2>Changes to this policy</h2><p>We may update this policy as our website or business practices change. The latest version will always appear on this page.</p></section>
      <section><h2>Contact</h2><p>Questions about this policy? Contact <a href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a>.</p></section>
      <Link className="privacy-back" href="/">&larr; Back to home</Link>
    </article>
    <Footer />
  </main>;
}
