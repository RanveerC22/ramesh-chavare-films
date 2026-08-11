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
    name: "Milind Kothavale",
    role: "Cinematographer, Kolhapur",
    quote:
      "Overall, a very well-equipped service provider in Kolhapur. The equipment is well maintained, the service is reliable, and the overall experience is smooth and professional.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Avadut Chavan",
    role: "Founder, Avdhut Chavan Photo Films",
    quote:
      "Ramesh Chavare films is the only place to rent a camera. Here you get everything you need for a film. Whether it's Mauli Dada or the rest of the team, the whole team is doing a great job.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Mukul Sharma",
    role: "Videographer, Mumbai",
    quote:
      "Nice management and best experience for the company",
    rating: 5,
  },
  {
    id: "t4",
    name: "Sudarshan Vandakar",
    role: "Cinematographer, Kolhapur",
    quote:
      "This is one of the most progressive rental house in Kolhapur, equipped with all the latest and high-quality gear. The team is extremely active, professional, and supportive, which makes every shoot smooth and enjoyable",
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
    title: "Psycho Ranga",
    type: "Movie",
    image:
      "/images/home/production/psyco_ranga.jpg",
  },
  {
    id: "p2",
    title: "Pralay",
    type: "Movie",
    image:
      "/images/home/production/pralay.jpg",
  },
  {
    id: "p3",
    title: "Mard Maratha — Music Video",
    type: "Music Video",
    image:
      "/images/home/production/mard_maratha.jpg",
  },
];

export type InstagramPost = {
  id: string;
  image: string;
};

export const instagramPreview: InstagramPost[] = [
  { id: "ig1", image: "/images/home/instagram/fx3.jpg" },
  { id: "ig2", image: "/images/home/instagram/trimurti_2.jpg" },
  { id: "ig3", image: "/images/home/instagram/mard_song.jpg" },
  { id: "ig4", image: "/images/home/instagram/rankala.jpg" },
  { id: "ig5", image: "/images/home/instagram/milind_k.jpg" },
  { id: "ig6", image: "/images/home/instagram/malhar_j.jpg" },
];
