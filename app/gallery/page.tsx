import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Behind the Scenes & Productions",
  description:
    "Browse behind-the-scenes moments, commercial shoots, and set photography from productions using equipment rented from Ramesh Chavare Films & Camera Rentals, Kolhapur.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <PageHeader
        eyebrow="On Set"
        title="Gallery"
        description="A look at the productions our gear has been part of — weddings, commercial shoots, and the behind-the-scenes moments in between."
      />

      <div className="mt-10">
        <GalleryGrid />
      </div>
    </section>
  );
}
