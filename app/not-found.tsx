import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
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
        <Button href="/">
          Back to Home
          <ArrowRight size={16} />
        </Button>
        <Button href={whatsappLink()} variant="secondary" external>
          <MessageCircle size={16} />
          WhatsApp Us
        </Button>
      </div>
    </section>
  );
}
