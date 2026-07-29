import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Aerial Site Overview Photography | JD Aerial Solutions",
  description: "High-resolution aerial site-overview photography for properties and projects in Albuquerque, New Mexico.",
};

const content: ServicePageContent = {
  kicker: "Aerial site overview imagery",
  title: { before: "Show the whole", emphasis: "site." },
  description: "High-resolution aerial imagery makes it easier to show a property's layout, scale, access, and surrounding context at a glance.",
  imageAlt: "Aerial view of a construction development at sunset with mountains in the distance",
  intro: { label: "Why site overview imagery", title: "The whole picture, from above.", copy: "One well-planned aerial shoot can give clients, owners, and stakeholders a clear visual reference for a property or project without relying only on ground-level photos." },
  benefits: {
    label: "A better project perspective",
    heading: "Make the site easier to understand.",
    items: [
      { number: "01", title: "Show scale and layout", copy: "Give people a high-level view of how the property, access points, and surrounding area fit together." },
      { number: "02", title: "Add context to the conversation", copy: "Use clear aerial visuals to support planning discussions, project updates, and property presentations." },
      { number: "03", title: "Create visuals worth sharing", copy: "Professional imagery gives your team a clean, useful asset for reports, presentations, and marketing." },
    ],
  },
  deliverables: { label: "What you receive", heading: "Useful visuals, ready to use.", copy: "Each flight is planned around the perspective and context your project needs most.", items: ["High-resolution aerial still photography", "Wide site-overview images", "Property and surrounding-area context", "Organized digital delivery for easy sharing"] },
  process: {
    label: "How it works",
    heading: "Simple from quote to delivery.",
    items: [
      { number: "01", title: "Share your goal", copy: "Tell us what you want people to see and how you expect to use the imagery." },
      { number: "02", title: "Plan the flight", copy: "We coordinate timing, property access, and the best overall perspective for the site." },
      { number: "03", title: "Receive polished imagery", copy: "Get a clean, organized collection of visuals that is ready to review and share." },
    ],
  },
  faqs: [
    { question: "What is site overview imagery useful for?", answer: "It can help show the scale, setting, access, and overall layout of a property, construction site, development, or commercial location." },
    { question: "Can the imagery be used in marketing or presentations?", answer: "Yes. Aerial site imagery is a strong fit for property marketing, proposals, presentations, project updates, and other visual communication." },
    { question: "Is this a survey or site plan?", answer: "No. This service provides aerial photography and visual documentation, not a licensed survey, site plan, or engineering deliverable." },
  ],
  cta: { kicker: "Ready to show the full picture?", heading: "Let's capture your site from the perspective that makes sense." },
};

export default function SiteOverviewImageryPage() {
  return <ServiceDetailPage content={content} />;
}
