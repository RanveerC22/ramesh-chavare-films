"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="no-print fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-ink shadow-card transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2.25} />
    </a>
  );
}
