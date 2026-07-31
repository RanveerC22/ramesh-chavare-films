import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/content";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-md border border-surface-border bg-surface p-6 shadow-card">
      <Quote className="mb-3 text-brass" size={22} strokeWidth={1.5} />
      <p className="flex-1 text-[15px] leading-relaxed text-ivory-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-brass text-brass" />
        ))}
      </div>
      <div className="mt-3 border-t border-surface-border pt-3">
        <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
          {testimonial.name}
        </p>
        <p className="text-xs text-ivory-dim">{testimonial.role}</p>
      </div>
    </div>
  );
}
