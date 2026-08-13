import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Commercial Property Documentation | Albuquerque, NM | JD Aerial Solutions",
  description: "Aerial commercial property documentation, exterior imagery, site visuals, and photo and video for property managers, developers, and building owners in Albuquerque, New Mexico.",
  alternates: { canonical: "/commercial-properties" },
  openGraph: { url: "/commercial-properties", title: "Commercial Property Documentation | Albuquerque, NM | JD Aerial Solutions", description: "Aerial commercial property documentation, exterior imagery, site visuals, and photo and video for property managers, developers, and building owners in Albuquerque, New Mexico." },
  twitter: { title: "Commercial Property Documentation | Albuquerque, NM | JD Aerial Solutions", description: "Aerial commercial property documentation, exterior imagery, site visuals, and photo and video for property managers, developers, and building owners in Albuquerque, New Mexico." },
};

const content: ServicePageContent = {
  kicker: "Commercial property documentation",
  title: { before: "Document the property", emphasis: "from above." },
  description: "Aerial imagery helps property managers, developers, and building owners document exterior conditions, site context, access, and the full scale of a commercial property.",
  imageAlt: "Aerial view of a construction development at sunset with mountains in the distance",
  intro: { label: "Why commercial documentation", title: "A clear visual record for the people who manage it.", copy: "From property records and maintenance planning to marketing material and project updates, aerial photos and video help teams understand a commercial site more quickly and communicate with confidence." },
  benefits: {
    label: "Built for the bigger picture",
    heading: "Show more than a street-level view.",
    items: [
      { number: "01", title: "Show scale and setting", copy: "Capture the building, parking, access, and surrounding area in a way that ground photos cannot." },
      { number: "02", title: "Strengthen marketing material", copy: "Add professional photo and video assets to listings, brochures, websites, and presentations." },
      { number: "03", title: "Create a visual record", copy: "Keep a clear reference of the property exterior and site context for your files or project team." },
    ],
  },
  deliverables: { label: "What you receive", heading: "Professional visuals, ready to share.", copy: "We focus on the perspectives that best communicate the property and its surroundings.", items: ["High-resolution aerial photography", "Short aerial video clips for listings and marketing", "Vertical 9:16 video clips for Reels, Stories, TikTok, and Shorts", "Exterior and full-property overview imagery", "Access, parking, and surrounding-area context", "Organized digital delivery for marketing or documentation"] },
  process: {
    label: "How it works",
    heading: "Straightforward from start to finish.",
    items: [
      { number: "01", title: "Tell us about the property", copy: "Share the location, your timeline, and how the imagery will be used." },
      { number: "02", title: "Coordinate the coverage", copy: "We plan around property access, business activity, and the visual goals of the shoot." },
      { number: "03", title: "Receive your media", copy: "Get a clean set of aerial photos and video ready for your team, listing, or presentation." },
    ],
  },
  faqs: [
    { question: "Can this be used for listings and marketing?", answer: "Yes. Aerial photography and short video clips are well suited for property listings, marketing material, websites, brochures, and presentations." },
    { question: "Can you create short aerial videos for a property?", answer: "Yes. We can discuss horizontal video for listings and websites, plus vertical 9:16 clips for social media, Reels, Stories, TikTok, and Shorts." },
    { question: "Can you work around an operating business?", answer: "Yes. We coordinate timing and property access in advance to keep the flight as efficient and low-disruption as possible." },
    { question: "Does this include interior photography?", answer: "Interior photography and video can be discussed as part of a commercial-property project. Tell us what you need to show, and we can plan the right visual coverage." },
  ],
  cta: { kicker: "Ready to make the property stand out?", heading: "Let's create visuals that give people the full picture." },
};

export default function CommercialPropertiesPage() {
  return <ServiceDetailPage content={content} />;
}
