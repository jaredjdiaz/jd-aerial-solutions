import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Contact | JD Aerial Solutions",
  description: "Request a quote for professional drone photography, aerial video, and visual documentation from JD Aerial Solutions in Albuquerque, New Mexico.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <Navbar />
    <section className="contact-page-content">
      <div className="contact-page-copy">
        <p className="gold-kicker">Let&apos;s work together</p>
        <h1>Have a project in mind?</h1>
        <p>Tell us what you need to see from above. We&apos;ll follow up with a straightforward plan and quote.</p>
        <a className="contact-email" href="mailto:info@jdaerialsolutions.com">info@jdaerialsolutions.com</a>
        <span>Albuquerque, New Mexico</span>
      </div>
      <QuoteForm />
    </section>
    <Footer />
  </main>;
}
