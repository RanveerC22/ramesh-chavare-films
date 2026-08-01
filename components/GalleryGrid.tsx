"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/data/content";

const categories = [
  "All",
  "Behind the Scenes",
  "Cast & Crew",
] as const;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered: GalleryImage[] =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openAt = (id: string) => {
    const idx = filtered.findIndex((img) => img.id === id);
    setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-sm border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              filter === cat
                ? "border-brass bg-brass text-ink"
                : "border-surface-border text-ivory-muted hover:border-brass hover:text-brass"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((img) => (
          <button
            key={img.id}
            onClick={() => openAt(img.id)}
            className="group relative block w-full overflow-hidden rounded-md border border-surface-border"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="eyebrow p-4 text-ivory">{img.category}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 text-ivory hover:text-brass"
          >
            <X size={28} />
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 text-ivory hover:text-brass md:left-8"
          >
            <ChevronLeft size={32} />
          </button>
          <div
            className="relative max-h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1200}
              height={1500}
              className="max-h-[80vh] w-auto rounded-sm object-contain"
            />
            <p className="eyebrow mt-3 text-center text-brass">
              {active.category}
            </p>
          </div>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 text-ivory hover:text-brass md:right-8"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
