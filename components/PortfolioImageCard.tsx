"use client";

import { useState } from "react";
import Image from "next/image";

type PortfolioImageCardProps = {
  title: string;
  detail: string;
  category: string;
  image: string;
  alt: string;
};

export default function PortfolioImageCard({ title, detail, category, image, alt }: PortfolioImageCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <button className="work-card work-card-featured" type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
      <div className="work-card-media"><Image src={image} alt={alt} fill sizes="(max-width: 820px) calc(100vw - 50px), 760px" /></div>
      <div className="work-card-caption"><span>{category}</span><b>{title}</b><small>{detail}</small><em>View full image &rarr;</em></div>
    </button>
    {isOpen && <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={`Full-size image: ${title}`} onClick={() => setIsOpen(false)}>
      <div className="portfolio-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="portfolio-lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close full-size image">&times;</button>
        <div className="portfolio-lightbox-image"><Image src={image} alt={alt} fill sizes="95vw" priority /></div>
      </div>
    </div>}
  </>;
}
