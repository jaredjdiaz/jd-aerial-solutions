import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Commercial Property Aerial Photography | JD Aerial Solutions",
  description: "Professional aerial photography for commercial properties, marketing, and visual documentation in Albuquerque, New Mexico.",
};

const content: ServicePageContent = {
  kicker: "Commercial property imagery",
  title: { before: "Make the property", emphasis: "stand out." },
  description: "Aerial imagery helps show the full scale, setting, and exterior presence of a commercial property from a compelling perspective.",
  imageAlt: "Aerial view of a commercial property and surrounding area",
  intro: { label: "Why commercial aerial imagery", title: "Give the property a stronger first impression.", copy: "From marketing material to property documentation, polished aerial imagery helps people understand a commercial site more quickly and remember it more clearly." },
  benefits: {
    label: "Built for the bigger picture",
    heading: "Show more than a street-level view.",
    items: [
      { number: "01", title: "Show scale and setting", copy: "Capture the building, parking, access, and surrounding area in a way that ground photos cannot." },
      { number: "02", title: "Strengthen marketing material", copy: "Add professional visual assets to listings, brochures, websites, and presentations." },
      { number: "03", title: "Create a visual record", copy: "Keep a clear reference of the property exterior and site context for your files or project team." },
    ],
  },
  deliverables: { label: "What you receive", heading: "Professional visuals, ready to share.", copy: "We focus on the perspectives that best communicate the property and its surroundings.", items: ["High-resolution aerial still photography", "Exterior and full-property overview imagery", "Access, parking, and surrounding-area context", "Organized digital delivery for marketing or documentation"] },
  process: {
    label: "How it works",
    heading: "Straightforward from start to finish.",
    items: [
      { number: "01", title: "Tell us about the property", copy: "Share the location, your timeline, and how the imagery will be used." },
      { number: "02", title: "Coordinate the coverage", copy: "We plan around property access, business activity, and the visual goals of the shoot." },
      { number: "03", title: "Receive your imagery", copy: "Get a clean set of aerial visuals ready for your team, listing, or presentation." },
    ],
  },
  faqs: [
    { question: "Can this imagery be used for listings and marketing?", answer: "Yes. Aerial photography is well suited for property listings, marketing material, websites, brochures, and presentations." },
    { question: "Can you work around an operating business?", answer: "Yes. We coordinate timing and property access in advance to keep the flight as efficient and low-disruption as possible." },
    { question: "Does this include interior photography?", answer: "This service is focused on aerial and exterior imagery. If you have a specific project in mind, contact us and we can discuss the visual coverage you need." },
  ],
  cta: { kicker: "Ready to make the property stand out?", heading: "Let's create visuals that give people the full picture." },
};

export default function CommercialPropertiesPage() {
  return <ServiceDetailPage content={content} />;
}
