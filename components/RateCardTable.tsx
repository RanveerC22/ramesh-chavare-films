"use client";

import { useMemo, useState } from "react";
import { Search, Printer, Download } from "lucide-react";
import Button from "@/components/Button";
import { allEquipment } from "@/data/equipment";
import { siteConfig } from "@/data/siteConfig";

const categories = ["All", ...Array.from(new Set(allEquipment.map((e) => e.category)))];

export default function RateCardTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return allEquipment.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="no-print flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ivory-dim"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search equipment…"
            className="w-full rounded-sm border border-surface-border bg-surface py-2.5 pl-10 pr-4 text-sm text-ivory placeholder:text-ivory-dim focus:border-brass focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-sm border px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                category === cat
                  ? "border-brass bg-brass text-ink"
                  : "border-surface-border text-ivory-muted hover:border-brass hover:text-brass"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="no-print mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href={siteConfig.rateCardPdfUrl} size="sm" download>
          <Download size={15} />
          Download PDF
        </Button>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-surface-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:border-brass hover:text-brass"
        >
          <Printer size={15} />
          Print This Page
        </button>
      </div>

      <div className="print-surface mt-8 overflow-hidden rounded-md border border-surface-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-surface-border bg-surface">
              <th className="px-5 py-3.5 font-display text-xs font-bold uppercase tracking-widest text-brass">
                Equipment
              </th>
              <th className="px-5 py-3.5 font-display text-xs font-bold uppercase tracking-widest text-brass">
                Category
              </th>
              <th className="px-5 py-3.5 text-right font-display text-xs font-bold uppercase tracking-widest text-brass">
                Rate / Day
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, i) => (
              <tr
                key={item.slug}
                className={`border-b border-surface-border last:border-0 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-surface/40"
                }`}
              >
                <td className="px-5 py-3.5 font-medium text-ivory">{item.name}</td>
                <td className="px-5 py-3.5 text-ivory-muted">{item.category}</td>
                <td className="timecode px-5 py-3.5 text-right font-semibold text-brass">
                  ₹{item.dailyRate.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-5 py-8 text-center text-ivory-dim">
                  No equipment matches your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="no-print mt-5 text-xs leading-relaxed text-ivory-dim">
        Rates shown are for standard daily rentals; weekly and production-block
  pricing available on request. Security deposit required at pickup.
  Don&apos;t see what you need? We stock individual accessories and
  items beyond this list — message us on WhatsApp and we&apos;ll sort
      </p>
    </div>
  );
}
