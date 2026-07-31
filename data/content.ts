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
    src: "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1000&auto=format&fit=crop",
    alt: "Cinematographer operating a gimbal on a wedding shoot",
    category: "Weddings",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
    alt: "Crew setting up lighting on a commercial set",
    category: "Commercial Shoots",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1478720568477-b6b64e33d43e?q=80&w=1000&auto=format&fit=crop",
    alt: "Behind the scenes on a production floor",
    category: "Behind the Scenes",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    alt: "Director reviewing a monitor on set",
    category: "Set Shoots",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=1000&auto=format&fit=crop",
    alt: "Camera assistant checking a cinema lens",
    category: "Behind the Scenes",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1000&auto=format&fit=crop",
    alt: "Wedding videography coverage under string lights",
    category: "Weddings",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1478720568477-1a71c9b5fbb1?q=80&w=1000&auto=format&fit=crop",
    alt: "Product commercial shoot with softbox lighting",
    category: "Commercial Shoots",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000&auto=format&fit=crop",
    alt: "Full crew and gear staged before a shoot",
    category: "Set Shoots",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1000&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Kolhapuri Chappal — Brand Film",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Panchganga — Short Documentary",
    type: "Documentary",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Rangoli Studios — Music Video",
    type: "Music Video",
    image:
      "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1200&auto=format&fit=crop",
  },
];

export type InstagramPost = {
  id: string;
  image: string;
};

export const instagramPreview: InstagramPost[] = [
  { id: "ig1", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600&auto=format&fit=crop" },
  { id: "ig2", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=600&auto=format&fit=crop" },
  { id: "ig3", image: "https://images.unsplash.com/photo-1585828922344-85b0a2c04302?q=80&w=600&auto=format&fit=crop" },
  { id: "ig4", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" },
  { id: "ig5", image: "https://images.unsplash.com/photo-1594394352636-2dc1a4b7c1c8?q=80&w=600&auto=format&fit=crop" },
  { id: "ig6", image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=600&auto=format&fit=crop" },
];
