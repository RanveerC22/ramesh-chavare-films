import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ShieldCheck, Wrench, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Our Story & Commitment",
  description:
    "Learn about Ramesh Chavare Films & Camera Rentals — Kolhapur's trusted film equipment rental partner since 2014, and the mission behind our gear and service.",
};

const milestones = [
  { year: "2014", label: "Founded in Kolhapur with a small kit of DSLR bodies and prime lenses." },
  { year: "2017", label: "Expanded into cinema camera bodies to serve wedding cinematographers." },
  { year: "2020", label: "Added a full lighting and audio inventory for commercial productions." },
  { year: "2023", label: "Introduced flagship cinema bodies and cinema lens sets for feature work." },
  { year: "Today", label: `Supporting ${siteConfig.yearsOfExperience}+ years of productions across Maharashtra.` },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">About Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-ivory md:text-5xl">
            {siteConfig.yearsOfExperience}+ Years Behind the Gear, Not the Camera
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-muted">
            We built our business on a simple idea — filmmakers do their best
            work when they can trust their equipment completely.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8 md:pb-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop"
            alt="Camera equipment being prepared for rental at Ramesh Chavare Films"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-brass">Our Story</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-wide text-ivory md:text-4xl">
            Started by a Filmmaker, Built for Filmmakers
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ivory-muted">
            Ramesh Chavare Films & Camera Rentals began in {siteConfig.founded}{" "}
            out of a frustration every filmmaker in Kolhapur understood well —
            professional-grade equipment was hard to find locally, and harder
            still to trust. What started as a small personal kit shared among
            friends in the industry grew, shoot by shoot, into a full rental
            house serving wedding cinematographers, production houses, and
            independent creators across the region.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ivory-muted">
            Today, our inventory spans flagship cinema cameras, cinema lens
            sets, and the lighting, audio, and support gear that surrounds
            them — but the standard hasn&apos;t changed. Every item is
            inspected before it leaves our shelves, because we know a
            production only gets one chance to get the shot right.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Commitment ────────────────── */}
      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Commitment" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To give every filmmaker in Kolhapur access to professional-grade equipment without the cost or risk of ownership.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the first name every filmmaker in Maharashtra thinks of when a production needs dependable gear.",
              },
              {
                icon: HeartHandshake,
                title: "Our Commitment",
                desc: "Honest pricing, tested equipment, and support that shows up — on time, every time, without exceptions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-md border border-surface-border bg-ink p-7">
                <Icon className="text-brass" size={28} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-ivory">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones (real chronological sequence) ─────── */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Our Journey" title="Milestones Along the Way" align="center" />
        <div className="mt-12 space-y-0">
          {milestones.map((m, i) => (
            <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="timecode flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass text-xs font-semibold text-brass">
                  {m.year === "Today" ? "•" : m.year.slice(2)}
                </span>
                {i < milestones.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-surface-border" />
                )}
              </div>
              <div className="pt-2">
                <p className="eyebrow text-brass">{m.year}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ivory-muted">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Condition",
                desc: "Every rental is functionally tested and cleaned before handover.",
              },
              {
                icon: Wrench,
                title: "In-House Servicing",
                desc: "Our own technicians maintain and calibrate gear between rentals.",
              },
              {
                icon: Users,
                title: "Local & Reachable",
                desc: "Based in Kolhapur with same-day pickup and drop for local productions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-md border border-surface-border bg-ink p-6">
                <Icon className="text-brass" size={24} strokeWidth={1.5} />
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-ivory">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
