// ─────────────────────────────────────────────────────────────
// SITE CONFIG
// Edit the values below to update contact details, socials, and
// business info across the entire website — nothing else needs
// to change.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Ramesh Chavare Films & Camera Rentals",
  shortName: "Ramesh Chavare Films",
  tagline: "Kolhapur's Most Trusted Film Gear Partner.",
  description:
    "Professional cinema camera, lens, and production equipment rentals in Kolhapur, Maharashtra. Trusted by wedding cinematographers, filmmakers, and content creators for well-maintained gear and dependable support.",
  url: "https://rameshchavarefilms.com",

  founded: 2014,
  yearsOfExperience: new Date().getFullYear() - 2014,

  contact: {
    phonePrimary: "+91 98765 43210",
    phonePrimaryRaw: "919876543210",
    phoneSecondary: "+91 91234 56789",
    phoneSecondaryRaw: "919123456789",
    whatsappNumber: "919876543210",
    email: "info@rameshchavarefilms.com",
    address: {
      line1: "Shop No. 4, Station Road",
      line2: "Near Rajarampuri, Kolhapur",
      city: "Kolhapur",
      state: "Maharashtra",
      pincode: "416001",
      country: "India",
    },
    mapEmbedUrl:
      "https://www.google.com/maps?q=Kolhapur,Maharashtra&output=embed",
    mapLinkUrl: "https://maps.google.com/?q=Kolhapur,Maharashtra",
    hours: [
      { day: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
      { day: "Sunday", time: "10:00 AM – 2:00 PM (Pickup/Drop only)" },
    ],
  },

  social: {
    instagram: "https://instagram.com/rameshchavarefilms",
    youtube: "https://youtube.com/@rameshchavarefilms",
    facebook: "https://facebook.com/rameshchavarefilms",
  },

  whatsappDefaultMessage:
    "Hi Ramesh Chavare Films, I'd like to know more about your equipment rentals.",

  rateCardPdfUrl: "/rate-card.pdf",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}

export function telLink(raw: string) {
  return `tel:+${raw}`;
}
