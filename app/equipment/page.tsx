import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import EquipmentCard from "@/components/EquipmentCard";
import Button from "@/components/Button";
import { cameras, lenses, accessories } from "@/data/equipment";
import { whatsappLink } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Equipment — Cameras, Lenses & Accessories",
  description:
    "Browse our full inventory of cinema cameras, lenses, and production accessories available for rent in Kolhapur, including RED, ARRI, Sony, Blackmagic, Zeiss, and Cooke gear.",
};

const quickLinks = [
  { href: "#cameras", label: "Cameras" },
  { href: "#lenses", label: "Lenses" },
  { href: "#accessories", label: "Accessories" },
];

export default function EquipmentPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PageHeader
            eyebrow="Our Inventory"
            title="Equipment for Every Production"
            description="Every camera, lens, and accessory below is available for daily rental. Rates shown are per day — message us on WhatsApp for multi-day and long-term production pricing."
          />
        </div>

        <div className="no-print sticky top-[60px] z-30 mt-8 border-y border-surface-border bg-ink/95 backdrop-blur md:top-[72px]">
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 md:px-8">
            {quickLinks.map((q) => (
              <a
                key={q.href}
                href={q.href}
                className="eyebrow whitespace-nowrap px-4 py-3.5 text-ivory-muted transition-colors hover:text-brass"
              >
                {q.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cameras ──────────────────────────────────────── */}
      <section id="cameras" className="scroll-mt-32 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow={`Cameras · ${cameras.length} Bodies`}
          title="Cinema Cameras"
          description="Full-frame and Super 35 cinema bodies from the industry's leading manufacturers, maintained and calibrated between every rental."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cameras.map((cam) => (
            <EquipmentCard
              key={cam.slug}
              image={cam.image}
              title={`${cam.brand} ${cam.model}`}
              description={cam.description}
              tags={cam.specs}
              price={cam.dailyRate}
              category="Camera"
            />
          ))}
        </div>
      </section>

      {/* ── Lenses ───────────────────────────────────────── */}
      <section id="lenses" className="scroll-mt-32 bg-surface/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow={`Lenses · ${lenses.length} Sets`}
            title="Cinema Lenses"
            description="Prime sets, zooms, and anamorphics across PL, EF, and E mounts — chosen to match the look your project needs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lenses.map((lens) => (
              <EquipmentCard
                key={lens.slug}
                image={lens.image}
                title={lens.name}
                subtitle={`${lens.mount} Mount`}
                description={lens.description}
                tags={[lens.focalLength]}
                price={lens.dailyRate}
                category="Lens"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessories ──────────────────────────────────── */}
      <section id="accessories" className="scroll-mt-32 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow={`Accessories · ${accessories.length} Items`}
          title="Support, Stabilisers & Audio"
          description="Everything that surrounds the camera — stabilisers, audio gear, monitors, and support systems."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((acc) => (
            <EquipmentCard
              key={acc.slug}
              image={acc.image}
              title={acc.name}
              subtitle={acc.category}
              description={acc.description}
              price={acc.dailyRate}
              category={acc.category}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="border-t border-surface-border bg-surface/40 py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ivory md:text-3xl">
            Don&apos;t See What You Need?
          </h2>
          <p className="mt-3 text-[15px] text-ivory-muted">
            Our inventory grows regularly — message us and we&apos;ll confirm
            availability or source it for your production.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              href={whatsappLink("Hi, I'd like to check availability for some equipment.")}
              external
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </Button>
            <Button href="/rate-card" variant="secondary">
              View Full Rate Card
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
