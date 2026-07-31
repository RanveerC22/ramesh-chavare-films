"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/equipment", label: "Equipment" },
  { href: "/rate-card", label: "Rate Card" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur border-b border-surface-border"
          : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulseTally rounded-full bg-tally tally-dot" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wide text-ivory md:text-2xl">
            Ramesh Chavare <span className="text-brass">Films</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`eyebrow transition-colors hover:text-brass ${
                pathname === link.href ? "text-brass" : "text-ivory-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-brass px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brass-light"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border bg-ink px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`eyebrow rounded-sm px-2 py-3 ${
                  pathname === link.href
                    ? "text-brass"
                    : "text-ivory-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-brass px-4 py-3 text-sm font-semibold text-ink"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            WhatsApp Us
          </a>
          <a
            href={`tel:+${siteConfig.contact.phonePrimaryRaw}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-sm border border-surface-border px-4 py-3 text-sm font-semibold text-ivory"
          >
            Call {siteConfig.contact.phonePrimary}
          </a>
        </div>
      )}
    </header>
  );
}
