"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const services = [
  "Construction Progress",
  "Roof, Building & Tower Documentation",
  "3D Models",
  "Site Overview Imagery",
  "Commercial Properties",
  "Vacant Land & Development",
  "Not sure yet",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const response = await fetch("/api/quote", { method: "POST", body: new FormData(form) });
    const result = await response.json().catch(() => ({ error: "Something went wrong. Please email us directly." }));
    if (!response.ok) {
      setStatus("error");
      setMessage(result.error ?? "Something went wrong. Please email us directly.");
      return;
    }
    form.reset();
    setStatus("success");
    setMessage("Thanks, your request is in. We’ll be in touch before takeoff.");
  }

  return <form className="quote-form" onSubmit={submitForm}>
    <div className="quote-form-heading"><p>Get a free quote</p><span>Fields marked <b aria-hidden="true">*</b> are required.</span></div>
    <div className="quote-form-grid">
      <label><span className="quote-form-label">Name <b aria-hidden="true">*</b></span><input name="name" autoComplete="name" required /></label>
      <label><span className="quote-form-label">Company</span><input name="company" autoComplete="organization" placeholder="Optional" /></label>
      <label><span className="quote-form-label">Email <b aria-hidden="true">*</b></span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span className="quote-form-label">Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
      <label><span className="quote-form-label">Service needed <b aria-hidden="true">*</b></span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
      <label><span className="quote-form-label">Project location <b aria-hidden="true">*</b></span><input name="location" autoComplete="street-address" placeholder="City or property address" required /></label>
      <label className="quote-form-message"><span className="quote-form-label">Project details <b aria-hidden="true">*</b></span><textarea name="details" rows={4} placeholder="What do you need documented, and when?" required /></label>
      <label className="quote-form-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    <button className="quote-form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a Quote"}<span aria-hidden="true">→</span></button>
    <p className="quote-form-privacy">By submitting, you agree to our <Link href="/privacy">Privacy Policy</Link>.</p>
    <p className={`quote-form-status${status === "error" ? " is-error" : ""}`} aria-live="polite">{message}</p>
  </form>;
}
