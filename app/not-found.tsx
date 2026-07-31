import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <p className="timecode text-brass">ERROR 404</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold uppercase tracking-wide text-ivory md:text-6xl">
        Scene Not Found
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ivory-muted">
        This page didn&apos;t make the final cut. Let&apos;s get you back to
        the main feature.
      </p>
      <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-brass px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-brass-light"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:border-brass hover:text-brass"
        >
          <MessageCircle size={16} />
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
