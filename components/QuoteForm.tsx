"use client";

import { FormEvent, useState } from "react";

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
    setMessage("Thanks—your request is in. We’ll be in touch before takeoff.");
  }

  return <form className="quote-form" onSubmit={submitForm}>
    <div className="quote-form-heading"><p>Get a free quote</p><span>Tell us a little about the project.</span></div>
    <div className="quote-form-grid">
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Company <small>(optional)</small><input name="company" autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Phone <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" /></label>
      <label>Service needed<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
      <label>Project location<input name="location" autoComplete="street-address" placeholder="City or property address" required /></label>
      <label className="quote-form-message">Project details<textarea name="details" rows={4} placeholder="What do you need documented, and when?" required /></label>
      <label className="quote-form-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    <button className="quote-form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a Quote"}<span aria-hidden="true">→</span></button>
    <p className={`quote-form-status${status === "error" ? " is-error" : ""}`} aria-live="polite">{message}</p>
  </form>;
}
