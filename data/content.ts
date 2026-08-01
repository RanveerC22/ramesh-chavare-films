// ─────────────────────────────────────────────────────────────
// GALLERY, TESTIMONIALS & FEATURED PRODUCTIONS
// Add new entries by appending an object to the relevant array.
// ─────────────────────────────────────────────────────────────

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "Behind the Scenes" | "Cast & Crew";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery/bts/bts-shoot-1.jpg",
    alt: "Shoot with historical theme in GOA",
    category: "Behind the Scenes",
  },
  {
    id: "g2",
    src: "/images/gallery/bts/bts-shoot-2.jpg",
    alt: "Crew setting up camera & preparing for shoot at watch store",
    category: "Behind the Scenes",
  },
  {
    id: "g3",
    src: "/images/gallery/bts/bts-shoot-3.jpg",
    alt: "Our founder with DOP Karan sir checking camera output clips",
    category: "Behind the Scenes",
  },
  {
    id: "g4",
    src: "/images/gallery/bts/bts-shoot-4.jpg",
    alt: "Zuli movie takes",
    category: "Behind the Scenes",
  },
  {
    id: "g5",
    src: "/images/gallery/bts/bts-shoot-5.jpg",
    alt: "Shougun pic",
    category: "Behind the Scenes",
  },
  {
    id: "g6",
    src: "/images/gallery/bts/bts-shoot-6.jpg",
    alt: "Atish sir operating RS4 Gimbal",
    category: "Behind the Scenes",
  },
  {
    id: "g7",
    src: "/images/gallery/bts/bts-shoot-7.jpg",
    alt: "Product commercial shoot with softbox lighting",
    category: "Behind the Scenes",
  },
  {
    id: "g8",
    src: "/images/gallery/cnc/cnc-1.jpg",
    alt: "Our founder with Subodh Bhave",
    category: "Cast & Crew",
  },
  {
    id: "g9",
    src: "/images/gallery/cnc/cnc-2.jpg",
    alt: "Our team with Smita Gondhkar",
    category: "Cast & Crew",
  },
  {
    id: "g10",
    src: "/images/gallery/cnc/cnc-3.jpg",
    alt: "Subodh sir inspecting cameras",
    category: "Cast & Crew",
  },
  {
    id: "g11",
    src: "/images/gallery/cnc/cnc-4.jpg",
    alt: "Initial days of shoot",
    category: "Cast & Crew",
  },
  {
    id: "g12",
    src: "/images/gallery/cnc/cnc-5.jpg",
    alt: "With Siddheshwar Zadbuke sir",
    category: "Cast & Crew",
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
