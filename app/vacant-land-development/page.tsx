import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Vacant Land Aerial Photography | JD Aerial Solutions",
  description: "Aerial photography and site-overview imagery for vacant land and development conversations in Albuquerque, New Mexico.",
  alternates: { canonical: "/vacant-land-development" },
  openGraph: { url: "/vacant-land-development", title: "Vacant Land Aerial Photography | JD Aerial Solutions", description: "Aerial photography and site-overview imagery for vacant land and development conversations in Albuquerque, New Mexico." },
  twitter: { title: "Vacant Land Aerial Photography | JD Aerial Solutions", description: "Aerial photography and site-overview imagery for vacant land and development conversations in Albuquerque, New Mexico." },
};

const content: ServicePageContent = {
  kicker: "Vacant land & development imagery",
  title: { before: "Bring the land", emphasis: "into view." },
  description: "Aerial imagery makes it easier to show a property's scale, access, landscape, and surrounding context from a clear, high-level perspective.",
  imageAlt: "Aerial view of a construction development at sunset with mountains in the distance",
  intro: { label: "Why vacant land imagery", title: "Help people understand the property before they arrive.", copy: "Clear aerial visuals can make land marketing, early project conversations, and property presentations more concrete by showing the site in its wider setting." },
  benefits: {
    label: "A clearer view of the land",
    heading: "Make the property easier to picture.",
    items: [
      { number: "01", title: "Show scale and setting", copy: "Give viewers a better sense of the property's size, landscape, and relationship to the surrounding area." },
      { number: "02", title: "Tell a clearer story", copy: "Use aerial imagery to help landowners, buyers, and project teams discuss the property with useful visual context." },
      { number: "03", title: "Support early conversations", copy: "Bring a stronger visual reference to land marketing, development discussions, and planning meetings." },
    ],
  },
  deliverables: { label: "What you receive", heading: "A visual reference for the property.", copy: "Each flight is planned around the land, the intended use of the imagery, and the overall perspective you need.", items: ["High-resolution aerial still photography", "Wide property and surrounding-area views", "Access, terrain, and site-context imagery", "Organized digital delivery for easy review and sharing"] },
  process: {
    label: "How it works",
    heading: "Simple from quote to delivery.",
    items: [
      { number: "01", title: "Tell us about the land", copy: "Share the property location, project context, and the kind of perspective you need." },
      { number: "02", title: "Plan the coverage", copy: "We consider property access, airspace, timing, and the visual goals before the flight." },
      { number: "03", title: "Receive your imagery", copy: "Get organized aerial visuals ready for your marketing, project conversation, or property records." },
    ],
  },
  faqs: [
    { question: "Can you provide a survey, boundary verification, or topographic map?", answer: "No. JD Aerial Solutions provides aerial photography and visual documentation only, not licensed surveying, boundary verification, or topographic mapping." },
    { question: "Can aerial imagery cover a larger parcel?", answer: "Often, yes. The best approach depends on property size, access, airspace, and the goals of the project. Reach out and we can discuss the scope." },
    { question: "Is this useful before a project begins?", answer: "Yes. Aerial imagery can give landowners, buyers, and project teams a clear visual reference before a project moves forward." },
  ],
  cta: { kicker: "Ready to show the land from a better angle?", heading: "Let's capture the perspective that brings the property into view." },
};

export default function VacantLandDevelopmentPage() {
  return <ServiceDetailPage content={content} />;
}
