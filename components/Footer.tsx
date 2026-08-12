import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, telLink } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="no-print border-t border-surface-border bg-ink">
      <div className="h-1.5 slate-stripes-brass opacity-60" />
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-mark.png"
                alt={`${siteConfig.shortName} logo`}
                width={42}
                height={24}
                className="h-8 w-auto"
              />
              <span className="font-display text-xl font-bold uppercase tracking-wide text-ivory">
                Ramesh Chavare <span className="text-brass">Films</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-muted">
              {siteConfig.tagline} Professional cinema cameras, lenses, and
              production gear for Kolhapur&apos;s filmmaking community.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-surface-border text-ivory-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-surface-border text-ivory-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Youtube size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-surface-border text-ivory-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-brass">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-muted">
              <li><Link href="/equipment" className="hover:text-ivory">Equipment</Link></li>
              <li><Link href="/rate-card" className="hover:text-ivory">Rate Card</Link></li>
              <li><Link href="/gallery" className="hover:text-ivory">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-ivory">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass">Categories</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-muted">
              <li><Link href="/equipment#cameras" className="hover:text-ivory">Cinema Cameras</Link></li>
              <li><Link href="/equipment#lenses" className="hover:text-ivory">Cinema Lenses</Link></li>
              <li><Link href="/equipment#accessories" className="hover:text-ivory">Cinema Accessories</Link></li>
              <li><Link href="/rate-card" className="hover:text-ivory">Download Rate Card</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory-muted">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-brass" />
                <a href={telLink(siteConfig.contact.phonePrimaryRaw)} className="hover:text-ivory">
                  {siteConfig.contact.phonePrimary}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-brass" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ivory">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brass" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-surface-border pt-6 text-xs text-ivory-dim md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed by Ranveer Chavare</p>
        </div>
      </div>
    </footer>
  );
}
