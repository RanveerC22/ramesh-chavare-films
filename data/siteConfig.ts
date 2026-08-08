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
  url: "https://ramesh-chavare-films.vercel.app/",

  founded: 2024,
  yearsOfExperience: new Date().getFullYear() - 2024,

  contact: {
    phonePrimary: "+91 9763978008",
    phonePrimaryRaw: "919763978008",
    phoneSecondary: "+91 9175333400",
    phoneSecondaryRaw: "919175333400",
    whatsappNumber: "919763978008",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.962457222323!2d74.210717574777!3d16.678762022833045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1ab15987c13e1%3A0x447b797c81fe8632!2sRamesh%20Chavare%20Films%20%26%20Camera%20Rentals!5e0!3m2!1sen!2sin!4v1785521521909!5m2!1sen!2sin%22",
    mapLinkUrl: "https://maps.app.goo.gl/uQpEKAZ8dfRW3c3p7",
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
    "Hi Ramesh Chavare Films, I'd like to enquire more about some equipments and their rentals.",

  rateCardPdfUrl: "/rate-card.pdf",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}

export function telLink(raw: string) {
  return `tel:+${raw}`;
}
