import type { Metadata } from "next";
import RateCardTable from "@/components/RateCardTable";

export const metadata: Metadata = {
  title: "Rate Card — Daily Rental Prices",
  description:
    "Transparent daily rental rates for every cinema camera, lens, and accessory available at Ramesh Chavare Films & Camera Rentals, Kolhapur. Search, filter, and download the full PDF rate card.",
};

export default function RateCardPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <p className="eyebrow text-brass">Transparent Pricing</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-ivory md:text-5xl">
        Rate Card
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-muted">
        Search or filter by category to find daily pricing for any item in
        our inventory. Download the full PDF to keep on hand for your
        production budget.
      </p>

      <div className="mt-10">
        <RateCardTable />
      </div>
    </section>
  );
}
