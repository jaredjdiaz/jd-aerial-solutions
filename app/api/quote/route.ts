import { NextResponse } from "next/server";

const recipient = "info@jdaerialsolutions.com";
const clean = (value: FormDataEntryValue | null) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = clean(formData.get("name"));
  const company = clean(formData.get("company"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const service = clean(formData.get("service"));
  const location = clean(formData.get("location"));
  const details = clean(formData.get("details"));
  if (clean(formData.get("website"))) return NextResponse.json({ ok: true });
  if (!name || !email || !service || !location || !details || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please complete the required fields with a valid email address." }, { status: 400 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "The quote form is not ready yet. Please email us directly." }, { status: 503 });

  const rows = [["Name", name], ["Company", company || "Not provided"], ["Email", email], ["Phone", phone || "Not provided"], ["Service", service], ["Project location", location], ["Project details", details]].map(([label, value]) => `<p><strong>${escapeHtml(label)}</strong><br />${escapeHtml(value).replace(/\n/g, "<br />")}</p>`).join("");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "JD Aerial Website <quotes@jdaerialsolutions.com>", to: [recipient], reply_to: email, subject: `Quote request: ${service}: ${name}`, html: `<h2>New JD Aerial quote request</h2>${rows}` }),
  });
  if (!response.ok) return NextResponse.json({ error: "We couldn’t send that request. Please email us directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
