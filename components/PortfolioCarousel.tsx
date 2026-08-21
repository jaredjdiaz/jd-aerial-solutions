"use client";

import { useRef } from "react";
import PortfolioImageCard from "@/components/PortfolioImageCard";

type PortfolioItem = {
  title: string;
  detail: string;
  category: string;
  image: string;
  alt: string;
  gallery?: ({ image: string; alt: string } | { video: string; alt: string })[];
};

export default function PortfolioCarousel({ items }: { items: PortfolioItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * (card?.offsetWidth ?? track.clientWidth), behavior: "smooth" });
  };

  return <div className="portfolio-carousel">
    <div className="portfolio-carousel-controls" aria-label="Portfolio navigation">
      <button type="button" onClick={() => move(-1)} aria-label="Show previous portfolio project">&larr;</button>
      <button type="button" onClick={() => move(1)} aria-label="Show next portfolio project">&rarr;</button>
    </div>
    <div className="work-grid" ref={trackRef}>{items.map((item) => <PortfolioImageCard key={item.title} {...item} />)}</div>
  </div>;
}
