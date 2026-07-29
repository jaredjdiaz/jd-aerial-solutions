import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "3D Models From Aerial Imagery | JD Aerial Solutions",
  description: "Visual 3D models of buildings, structures, and sites created from aerial imagery in Albuquerque, New Mexico.",
};

const content: ServicePageContent = {
  kicker: "Aerial 3D model visualization",
  title: { before: "See the project", emphasis: "in 3D." },
  description: "Aerial imagery can be turned into a visual 3D model that gives your team a more complete way to explore a building, structure, or site.",
  imageAlt: "Aerial view of a construction development at sunset with mountains in the distance",
  intro: { label: "Why 3D models", title: "A more complete visual of the project.", copy: "A 3D model brings aerial coverage together into a single visual experience, making it easier to understand the overall form and context of a structure or site." },
  benefits: {
    label: "Built for a better perspective",
    heading: "Explore more than a single image.",
    items: [
      { number: "01", title: "See the full structure", copy: "View a building, structure, or site from perspectives that are hard to capture in a single photograph." },
      { number: "02", title: "Share a stronger visual reference", copy: "Give clients, project teams, and stakeholders a clearer way to understand the subject and its context." },
      { number: "03", title: "Document the project visually", copy: "Create a useful before-and-after or progress reference as a property or project evolves." },
    ],
  },
  deliverables: { label: "What you receive", heading: "A visual model built from aerial coverage.", copy: "Each project is evaluated around the subject, the setting, and the kind of visual result you need.", items: ["Photogrammetry-based 3D visualization", "Supporting aerial imagery captured during the project", "Shareable model viewing or delivery format based on project needs", "Organized digital delivery for review and discussion"] },
  process: {
    label: "How it works",
    heading: "Planned for the subject, built for the view.",
    items: [
      { number: "01", title: "Tell us about the subject", copy: "Share what you would like modeled, where it is located, and how you expect to use the visual." },
      { number: "02", title: "Capture the coverage", copy: "We plan the aerial capture around the subject, access, weather, lighting, and project conditions." },
      { number: "03", title: "Build and deliver the model", copy: "The imagery is processed into a 3D visualization and delivered with the supporting project files or viewing option." },
    ],
  },
  faqs: [
    { question: "What can be made into a 3D model?", answer: "Buildings, structures, properties, and sites can be good candidates. The best fit depends on the size, access, lighting, and complexity of the subject." },
    { question: "Is a 3D model a survey or engineering model?", answer: "No. This is a visual 3D model made from aerial imagery. It is not a licensed survey, engineering model, or representation of verified measurements." },
    { question: "Is every site a good fit for 3D modeling?", answer: "Not always. Reflective surfaces, moving equipment, dense vegetation, weather, and lighting can affect the result. We can review your project before scheduling." },
  ],
  cta: { kicker: "Ready to see your project from every angle?", heading: "Let's build a visual model that brings the full project into view." },
};

export default function ThreeDModelsPage() {
  return <ServiceDetailPage content={content} />;
}
