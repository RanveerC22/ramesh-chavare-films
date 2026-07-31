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
    phonePrimary: "9763978008",
    phonePrimaryRaw: "9763978008",
    phoneSecondary: "9175333400",
    phoneSecondaryRaw: "9175333400",
    whatsappNumber: "9763978008",
    email: "kolhapurfilmcamerarentals@gmail.com",
    address: {
      line1: "A/22/7-8, Rajlaxmi Nagar, Devkar Panand",
      line2: "Near Nikam Park, Kolhapur",
      city: "Kolhapur",
      state: "Maharashtra",
      pincode: "416012",
      country: "India",
    },
    mapEmbedUrl:
      "https://www.google.com/maps?q=Kolhapur,Maharashtra&output=embed",
    mapLinkUrl: "https://maps.google.com/?q=Kolhapur,Maharashtra",
    hours: [
      { day: "Monday – Saturday", time: "9:30 AM – 9:30 PM" },
      { day: "Sunday", time: "10:00 AM – 2:00 PM (Pickup/Drop only)" },
    ],
  },

  social: {
    instagram: "https://instagram.com/rameshc_filmcamerarentals",
    youtube: "https://youtube.com/@rameshchavarefilms",
    facebook: "https://facebook.com/share/1CoqyXwjBj/",
  },

  whatsappDefaultMessage:
    "Hi Ramesh Chavare Films, I'd like to enquire more about some equipment rentals.",

  rateCardPdfUrl: "/rate-card.pdf",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}

export function telLink(raw: string) {
  return `tel:+${raw}`;
}
