import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RateCardTable from "@/components/RateCardTable";

export const metadata: Metadata = {
  title: "Rate Card — Daily Rental Prices",
  description:
    "Transparent daily rental rates for every cinema camera, lens, and accessory available at Ramesh Chavare Films & Camera Rentals, Kolhapur. Search, filter, and download the full PDF rate card.",
};

export default function RateCardPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <PageHeader
        eyebrow="Transparent Pricing"
        title="Rate Card"
        description="Search or filter by category to find daily pricing for any item in our inventory. Download the full PDF to keep on hand for your production budget."
      />

      <div className="mt-10">
        <RateCardTable />
      </div>
    </section>
  );
}
