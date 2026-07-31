import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  Wrench,
  Clock,
  SlidersHorizontal,
  ArrowRight,
  ChevronDown,
  Camera as CameraIcon,
  Aperture,
  Package,
  Instagram,
} from "lucide-react";
import Ticker from "@/components/Ticker";
import SectionHeading from "@/components/SectionHeading";
import EquipmentCard from "@/components/EquipmentCard";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { cameras, lenses, accessories } from "@/data/equipment";
import { testimonials, featuredProductions, instagramPreview } from "@/data/content";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

export default function HomePage() {
  const featuredCameras = cameras.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000&auto=format&fit=crop"
          alt="Cinema camera rig on a professional film set"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink" />
        <div className="grain-overlay absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-5 pt-24 md:px-8">
          <p className="eyebrow flex items-center gap-2.5 text-brass">
            <span className="h-1.5 w-1.5 rounded-full bg-tally tally-dot" />
            Kolhapur&apos;s Premier Rental House · Est. {siteConfig.founded}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-wide text-ivory sm:text-6xl md:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-muted md:text-lg">
            Cinema cameras, cinema lenses, and production-grade accessories —
            maintained to a professional standard and ready whenever your
            next shoot demands it.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Button href="/equipment">
              View Equipment
              <ArrowRight size={16} />
            </Button>
            <Button href={whatsappLink()} variant="secondary" external>
              <MessageCircle size={16} />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-dim md:flex">
          <span className="eyebrow">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </section>

      <Ticker />

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Why Filmmakers Choose Us"
          title="Built on Trust, Tested on Set"
          description="Every piece of gear that leaves our shelves has been inspected, cleaned, and functionally tested — because your production can't afford downtime."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Trusted by Filmmakers",
              desc: "Relied on by wedding cinematographers, studios, and production houses across Kolhapur.",
            },
            {
              icon: Wrench,
              title: "Well-Maintained Gear",
              desc: "Every camera, lens, and accessory is inspected and tested before it reaches you.",
            },
            {
              icon: Clock,
              title: "Quick Support",
              desc: "Fast responses on WhatsApp and call, including on shoot days when it matters most.",
            },
            {
              icon: SlidersHorizontal,
              title: "Flexible Rentals",
              desc: "Daily, weekend, and long-term production rentals tailored to your schedule.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-md border border-surface-border bg-surface p-6 transition-colors hover:border-brass/50"
            >
              <Icon className="text-brass" size={26} strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-ivory">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Equipment ───────────────────────────── */}
      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Equipment"
              title="Cameras On Our Most-Booked List"
            />
            <Link
              href="/equipment"
              className="eyebrow flex items-center gap-2 text-brass hover:text-brass-light"
            >
              View Full Inventory <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredCameras.map((cam) => (
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
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Browse By Category" title="Everything Your Shoot Needs" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: CameraIcon,
              title: "Cameras",
              desc: `${cameras.length}+ cinema camera bodies from RED, ARRI, Sony & Blackmagic`,
              href: "/equipment#cameras",
            },
            {
              icon: Aperture,
              title: "Lenses",
              desc: `${lenses.length}+ prime and zoom sets across PL, EF & E mounts`,
              href: "/equipment#lenses",
            },
            {
              icon: Package,
              title: "Accessories",
              desc: `${accessories.length}+ gimbals, lighting, audio & support gear`,
              href: "/equipment#accessories",
            },
          ].map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative overflow-hidden rounded-md border border-surface-border bg-surface p-8 transition-colors hover:border-brass/50"
            >
              <Icon className="text-brass" size={30} strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-ivory">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{desc}</p>
              <span className="eyebrow mt-6 flex items-center gap-2 text-brass opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Latest Projects / Featured Productions ───────── */}
      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Latest Productions Shot on Our Gear"
            description="A selection of weddings, commercials, and documentaries our rental clients have delivered using equipment from our inventory."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProductions.map((p) => (
              <div key={p.id} className="group relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p className="eyebrow text-brass">{p.type}</p>
                  <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-ivory">
                    {p.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Filmmakers Say About Us"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* ── Rate Card Preview ────────────────────────────── */}
      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="One Rate Card. No Surprises."
            description="Every price is listed upfront — daily rental rates for every camera, lens, and accessory in our inventory. Browse online or download the full PDF."
            align="center"
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button href="/rate-card">
              View Rate Card
              <ArrowRight size={16} />
            </Button>
            <Button href={siteConfig.rateCardPdfUrl} variant="secondary" download>
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* ── Instagram Preview ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Follow Along" title="On Set With Us" />
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow flex items-center gap-2 text-brass hover:text-brass-light"
          >
            <Instagram size={14} /> @{siteConfig.shortName.replace(/\s+/g, "")}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2.5 md:grid-cols-6">
          {instagramPreview.map((post) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={post.image}
                alt="Instagram post from Ramesh Chavare Films"
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                <Instagram
                  size={20}
                  className="text-ivory opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 slate-stripes opacity-[0.035]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="eyebrow text-brass">Ready When You Are</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-wide text-ivory md:text-4xl">
            Reserve Your Gear for the Next Shoot
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ivory-muted">
            Message us on WhatsApp with your dates and requirements — we&apos;ll
            confirm availability and pricing within minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button href={whatsappLink()} external>
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>
            <Button href="/contact" variant="secondary">
              All Contact Details
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
