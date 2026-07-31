import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Behind the Scenes & Productions",
  description:
    "Browse behind-the-scenes moments, commercial shoots, and set photography from productions using equipment rented from Ramesh Chavare Films & Camera Rentals, Kolhapur.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <p className="eyebrow text-brass">On Set</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-ivory md:text-5xl">
        Gallery
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-muted">
        A look at the productions our gear has been part of — weddings,
        commercial shoots, and the behind-the-scenes moments in between.
      </p>

      <div className="mt-10">
        <GalleryGrid />
      </div>
    </section>
  );
}
