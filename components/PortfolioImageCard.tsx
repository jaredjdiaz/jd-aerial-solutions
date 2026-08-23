"use client";

import { useState } from "react";
import Image from "next/image";

type PortfolioImageCardProps = {
  title: string;
  detail: string;
  category: string;
  image: string;
  alt: string;
  gallery?: ({ image: string; alt: string } | { video: string; alt: string })[];
};

export default function PortfolioImageCard({ title, detail, category, image, alt, gallery }: PortfolioImageCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const media = gallery?.length ? gallery : [{ image, alt }];
  const activeMedia = media[activeIndex];
  const hasGallery = media.length > 1;

  const openLightbox = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };

  const showPrevious = () => setActiveIndex((index) => (index - 1 + media.length) % media.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % media.length);

  return <>
    <button className="work-card work-card-featured" type="button" onClick={openLightbox} aria-haspopup="dialog">
      <div className="work-card-media"><Image src={image} alt={alt} fill sizes="(max-width: 820px) calc(100vw - 50px), 760px" /></div>
      <div className="work-card-caption"><span>{category}</span><b>{title}</b><small>{detail}</small><em>{hasGallery ? `View ${media.length}-item gallery` : "View full image"} &rarr;</em></div>
    </button>
    {isOpen && <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={`Full-size image: ${title}`} onClick={() => setIsOpen(false)}>
      <div className="portfolio-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="portfolio-lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close full-size image">&times;</button>
        {"image" in activeMedia
          ? <div className="portfolio-lightbox-image"><Image src={activeMedia.image} alt={activeMedia.alt} fill sizes="95vw" priority /></div>
          : <video className="portfolio-lightbox-video" src={activeMedia.video} controls autoPlay playsInline preload="metadata" aria-label={activeMedia.alt}>Your browser does not support HTML video.</video>}
        {hasGallery && <div className="portfolio-lightbox-controls">
          <button type="button" onClick={showPrevious} aria-label="Show previous portfolio image">&larr;</button>
          <span>{activeIndex + 1} of {media.length}</span>
          <button type="button" onClick={showNext} aria-label="Show next portfolio image">&rarr;</button>
        </div>}
      </div>
    </div>}
  </>;
}
