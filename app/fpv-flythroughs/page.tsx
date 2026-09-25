import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "FPV Drone Flythrough Videos in Albuquerque | JD Aerial Solutions",
  description: "Immersive FPV drone flythrough video for commercial properties, music venues, hospitality spaces, construction sites, and select events in Albuquerque, New Mexico.",
  alternates: { canonical: "/fpv-flythroughs" },
  openGraph: {
    url: "/fpv-flythroughs",
    title: "FPV Drone Flythrough Videos in Albuquerque | JD Aerial Solutions",
    description: "Immersive FPV drone video for properties, venues, construction sites, and select events in Albuquerque, New Mexico.",
  },
  twitter: {
    title: "FPV Drone Flythrough Videos in Albuquerque | JD Aerial Solutions",
    description: "Immersive FPV drone video for properties, venues, construction sites, and select events in Albuquerque, New Mexico.",
  },
};

const content: ServicePageContent = {
  kicker: "Immersive FPV video",
  title: { before: "Move through the space.", emphasis: "Tell the full story." },
  description: "Smooth, continuous flythrough video gives viewers a natural sense of moving through a property, venue, building, or project site.",
  imageAlt: "Sandia Mountains beneath colorful clouds and a rainbow in Albuquerque, New Mexico",
  intro: {
    label: "A more immersive perspective",
    title: "Show how the entire space connects.",
    copy: "FPV video can move through entrances, rooms, hallways, stages, work areas, and outdoor spaces in one engaging sequence. Each route is planned around the location, the story you want to tell, and the people or activity on site.",
  },
  benefits: {
    label: "Built to hold attention",
    heading: "More than a standard property tour.",
    items: [
      { number: "01", title: "Create a sense of movement", copy: "A continuous flight helps viewers understand the scale, flow, and character of a space." },
      { number: "02", title: "Connect indoor and outdoor areas", copy: "Show how entrances, gathering areas, rooms, and exterior features relate to one another." },
      { number: "03", title: "Make marketing more memorable", copy: "Give websites, listings, presentations, and social channels a distinctive visual centerpiece." },
    ],
  },
  deliverables: {
    label: "What you can receive",
    heading: "A finished video built around the space.",
    copy: "Deliverables are tailored to the location, platform, and purpose of the project.",
    items: [
      "Planned indoor, outdoor, or combined flythrough route",
      "Edited FPV video",
      "Branding, titles, and licensed music when requested",
    ],
  },
  process: {
    label: "How it works",
    heading: "Plan the route before takeoff.",
    items: [
      { number: "01", title: "Walk the location", copy: "We review the space, access points, lighting, activity, and the route you want viewers to experience." },
      { number: "02", title: "Prepare the flight", copy: "The location is coordinated for a controlled flight path with appropriate clearance and site safety considerations." },
      { number: "03", title: "Fly and edit", copy: "The strongest take is shaped into a polished video ready for your chosen platforms." },
    ],
  },
  faqs: [
    { question: "What locations work well for FPV flythroughs?", answer: "Commercial properties, music venues, hospitality spaces, offices, retail locations, construction sites, and distinctive event spaces can all be strong candidates." },
    { question: "Can you film during a live event?", answer: "Potentially. Live-event flights depend on the venue, crowd layout, flight route, operating environment, equipment, permissions, and overall safety plan. We review those details before confirming a flight." },
    { question: "Can the video include both indoor and outdoor areas?", answer: "Yes, when the property, weather, airspace, permissions, and flight route support a safe transition between the two." },
  ],
  cta: {
    kicker: "Have a space worth experiencing?",
    heading: "Let’s plan an FPV route that brings it to life.",
  },
};

export default function FpvFlythroughsPage() {
  return <ServiceDetailPage content={content} />;
}
