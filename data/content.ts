// ─────────────────────────────────────────────────────────────
// GALLERY, TESTIMONIALS & FEATURED PRODUCTIONS
// Add new entries by appending an object to the relevant array.
// ─────────────────────────────────────────────────────────────

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "Behind the Scenes" | "Commercial Shoots" | "Set Shoots" | "Weddings";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://picsum.photos/seed/rcf-gallery-g1/900/1200",
    alt: "Cinematographer operating a gimbal on a wedding shoot",
    category: "Weddings",
  },
  {
    id: "g2",
    src: "https://picsum.photos/seed/rcf-gallery-g2/1200/900",
    alt: "Crew setting up lighting on a commercial set",
    category: "Commercial Shoots",
  },
  {
    id: "g3",
    src: "https://picsum.photos/seed/rcf-gallery-g3/1000/1000",
    alt: "Behind the scenes on a production floor",
    category: "Behind the Scenes",
  },
  {
    id: "g4",
    src: "https://picsum.photos/seed/rcf-gallery-g4/900/1300",
    alt: "Director reviewing a monitor on set",
    category: "Set Shoots",
  },
  {
    id: "g5",
    src: "https://picsum.photos/seed/rcf-gallery-g5/1200/850",
    alt: "Camera assistant checking a cinema lens",
    category: "Behind the Scenes",
  },
  {
    id: "g6",
    src: "https://picsum.photos/seed/rcf-gallery-g6/950/1250",
    alt: "Wedding videography coverage under string lights",
    category: "Weddings",
  },
  {
    id: "g7",
    src: "https://picsum.photos/seed/rcf-gallery-g7/1200/950",
    alt: "Product commercial shoot with softbox lighting",
    category: "Commercial Shoots",
  },
  {
    id: "g8",
    src: "https://picsum.photos/seed/rcf-gallery-g8/1000/1000",
    alt: "Full crew and gear staged before a shoot",
    category: "Set Shoots",
  },
  {
    id: "g9",
    src: "https://picsum.photos/seed/rcf-gallery-g9/900/1200",
    alt: "Close-up of a cinema camera rig with monitor",
    category: "Behind the Scenes",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sagar Deshmukh",
    role: "Wedding Cinematographer, Kolhapur",
    quote:
      "Their gear is always spotless and tested before pickup. On a wedding day there's no room for surprises, and Ramesh Chavare Films has never once let us down.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priyanka Kulkarni",
    role: "Founder, Frameworks Studio",
    quote:
      "We rent our anamorphic sets from them for every commercial job. Honest pricing, flexible timing, and gear that performs exactly as promised.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Ashutosh Patil",
    role: "Freelance Videographer",
    quote:
      "As a student I couldn't afford a cinema camera outright. Renting from them gave me access to gear I needed to actually grow — and they explained everything patiently.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Neha Bhosale",
    role: "Production Manager, Panchganga Films",
    quote:
      "Quick WhatsApp response, gear delivered on time, and a rate card that's transparent from day one. Exactly what a production house needs from a rental partner.",
    rating: 5,
  },
];

export type Production = {
  id: string;
  title: string;
  type: string;
  image: string;
};

export const featuredProductions: Production[] = [
  {
    id: "p1",
    title: "Sanchari — Wedding Film",
    type: "Wedding Cinematography",
    image:
      "https://picsum.photos/seed/rcf-production-p1/1200/1600",
  },
  {
    id: "p2",
    title: "Kolhapuri Chappal — Brand Film",
    type: "Commercial",
    image:
      "https://picsum.photos/seed/rcf-production-p2/1200/1600",
  },
  {
    id: "p3",
    title: "Panchganga — Short Documentary",
    type: "Documentary",
    image:
      "https://picsum.photos/seed/rcf-production-p3/1200/1600",
  },
  {
    id: "p4",
    title: "Rangoli Studios — Music Video",
    type: "Music Video",
    image:
      "https://picsum.photos/seed/rcf-production-p4/1200/1600",
  },
];

export type InstagramPost = {
  id: string;
  image: string;
};

export const instagramPreview: InstagramPost[] = [
  { id: "ig1", image: "https://picsum.photos/seed/rcf-instagram-ig1/600/600" },
  { id: "ig2", image: "https://picsum.photos/seed/rcf-instagram-ig2/600/600" },
  { id: "ig3", image: "https://picsum.photos/seed/rcf-instagram-ig3/600/600" },
  { id: "ig4", image: "https://picsum.photos/seed/rcf-instagram-ig4/600/600" },
  { id: "ig5", image: "https://picsum.photos/seed/rcf-instagram-ig5/600/600" },
  { id: "ig6", image: "https://picsum.photos/seed/rcf-instagram-ig6/600/600" },
];
