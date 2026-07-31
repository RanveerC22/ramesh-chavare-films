import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ramesh Chavare Films & Camera Rentals in Kolhapur — call, WhatsApp, email, or visit us in person to check equipment availability.",
};

export default function ContactPage() {
  const { contact, social } = siteConfig;

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <p className="eyebrow text-brass">Get In Touch</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-ivory md:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-muted">
        The fastest way to check availability is WhatsApp. For everything
        else, reach us below.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
        {/* ── Contact details ─────────────────────────────── */}
        <div className="lg:col-span-2">
          <div className="space-y-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-md border border-brass/40 bg-brass/10 p-5 transition-colors hover:bg-brass/15"
            >
              <MessageCircle className="mt-0.5 shrink-0 text-brass" size={22} />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
                  WhatsApp (Fastest Response)
                </p>
                <p className="mt-1 text-sm text-ivory-muted">
                  +{contact.whatsappNumber.replace(/(\d{2})(\d{5})(\d{5})/, "$1 $2 $3")}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-md border border-surface-border bg-surface p-5">
              <Phone className="mt-0.5 shrink-0 text-brass" size={22} />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
                  Call Us
                </p>
                <a href={telLink(contact.phonePrimaryRaw)} className="mt-1 block text-sm text-ivory-muted hover:text-ivory">
                  {contact.phonePrimary}
                </a>
                <a href={telLink(contact.phoneSecondaryRaw)} className="mt-0.5 block text-sm text-ivory-muted hover:text-ivory">
                  {contact.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-md border border-surface-border bg-surface p-5">
              <Mail className="mt-0.5 shrink-0 text-brass" size={22} />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
                  Email
                </p>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-ivory-muted hover:text-ivory">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-md border border-surface-border bg-surface p-5">
              <MapPin className="mt-0.5 shrink-0 text-brass" size={22} />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
                  Visit Us
                </p>
                <p className="mt-1 text-sm text-ivory-muted">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.pincode}
                </p>
                <a
                  href={contact.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-2 inline-block text-brass hover:text-brass-light"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-md border border-surface-border bg-surface p-5">
              <Clock className="mt-0.5 shrink-0 text-brass" size={22} />
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ivory">
                  Business Hours
                </p>
                <ul className="mt-1 space-y-0.5 text-sm text-ivory-muted">
                  {contact.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="timecode text-ivory-dim">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-surface-border text-ivory-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Instagram size={18} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-surface-border text-ivory-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Map ──────────────────────────────────────────── */}
        <div className="lg:col-span-3">
          <div className="h-[420px] w-full overflow-hidden rounded-md border border-surface-border grayscale transition-all hover:grayscale-0 lg:h-full">
            <iframe
              src={contact.mapEmbedUrl}
              title="Ramesh Chavare Films & Camera Rentals location"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
