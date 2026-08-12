// ─────────────────────────────────────────────────────────────
// EQUIPMENT CATALOG
// To add a new camera, lens, or accessory: copy an existing
// object in the relevant array and edit the fields. No other
// file needs to change — pages, filters, and the rate card all
// read from this file automatically.
//
// `image` accepts any URL. Replace the placeholder Unsplash URLs
// with your own product photography (e.g. "/images/cameras/red-v-raptor.jpg"
// after adding the file to /public/images/cameras/).
// ─────────────────────────────────────────────────────────────

export type Camera = {
  slug: string;
  brand: string;
  model: string;
  image: string;
  description: string;
  specs: string[];
  dailyRate: number;
  featured?: boolean;
};

export type Lens = {
  slug: string;
  name: string;
  mount: string;
  focalLength: string;
  image: string;
  description: string;
  dailyRate: number;
  featured?: boolean;
};

export type Accessory = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  dailyRate: number;
  featured?: boolean;
};

export const cameras: Camera[] = [
   {
    slug: "sony-venice-2",
    brand: "Sony",
    model: "VENICE 2 8.6K",
    image:
      "/images/equipment/cameras/sony_venis.png",
    description:
      "Flagship full-frame cinema camera designed for high-end films and premium productions with exceptional dynamic range.",
    specs: ["8.6K Full-Frame Sensor", "16 Stops Latitude", "Dual Base ISO 800/3200", "PL / E-Mount"],
    dailyRate: 15000,
    featured: true,
  },
  {
    slug: "red-helium-8k",
    brand: "RED",
    model: "HELIUM 8K",
    image:
      "/images/equipment/cameras/red_helium.jpg",
    description:
      "High-end 8K cinema camera delivering exceptional detail, dynamic range, and cinematic image quality for professional productions.",
    specs: ["8K HELIUM Sensor", "Up to 60fps in 8K", "REDCODE RAW", "16.5+ Stops Dynamic Range",],
    dailyRate: 7000,
    featured: true,
  },
  {
    slug: "sony-fx3",
    brand: "Sony",
    model: "Cinema Line FX3 4K",
    image:
      "/images/equipment/cameras/sony_fx3.jpg",
    description:
      "Compact full-frame cinema camera offering excellent low-light performance and versatile autofocus for professional video production.",
    specs: ["Full-Frame 4K", "15+ Stops Dynamic Range", "E-Mount", "120fps 4K"],
    dailyRate: 3000,
    featured: true,
  },
  {
    slug: "sony-fx7",
    brand: "Sony",
    model: "Cinema Line FS7 4K",
    image:
      "/images/equipment/cameras/sony_fs7.jpg",
    description:
      "Professional Super 35 cinema camera known for reliable performance, excellent image quality for films, documentaries, and commercials.",
    specs: ["4K Super 35 Sensor", "Up to 180fps in Full HD", "E-Mount"],
    dailyRate: 2000,
  },
];

export const lenses: Lens[] = [
  {
    slug: "sigma-prime-set",
    name: "Sigma Prime Set (5 lenses)",
    mount: "PL",
    focalLength: "20 / 24 / 35 / 50 / 85mm",
    image:
      "/images/equipment/lenses/Sigma_Prime.png",
    description:
      "Five versatile focal lengths designed for creators who demand crisp detail and cinematic depth — from sweeping wides to intimate portraits.",
    dailyRate: 6000,
    featured: true,
  },
  {
    slug: "cp2-lense-set",
    name: "CP2 Lense Set (5 lenses)",
    mount: "PL",
    focalLength: "15 / 25 / 35 / 50 / 85mm",
    image:
      "/images/equipment/lenses/CP2.jpg",
    description:
      "A complete set of ZEISS CP2 cinema lenses delivering consistent colour, smooth focus control, and a timeless cinematic look for every focal length",
    dailyRate: 4000,
    featured: true,
  },
  {
    slug: "hr-zoom",
    name: "Angenieux HR Zoom 25-250mm T3.5",
    mount: "EF / PL",
    focalLength: "25-250mm",
    image:
      "/images/equipment/lenses/Alura_Zoom.jpg",
    description:
      "An iconic high-ratio zoom that moves effortlessly from wide shots to tight close-ups — perfect for productions where changing lenses isn't an option.",
    dailyRate: 2500,
  },
  {
    slug: "gmaster-kit",
    name: "G Master Lense Kit",
    mount: "EF",
    focalLength: "50, 85, 24-70, 70-200mm",
    image:
      "/images/equipment/lenses/Gmaster.png",
    description:
      "An industry-leading lens kit offering unmatched image quality, creamy background separation, and exceptional performance for both photography and filmmaking.",
    dailyRate: 6000,
  },
  {
    slug: "sony-autofocus",
    name: "Sony Autofocus Lens Kit",
    mount: "EF",
    focalLength: "50 / 85 / 24-70mm",
    image:
      "/images/equipment/lenses/Sony_Lense.jpg",
    description:
      "A versatilee trio covering everything from wide scenes to flattering portraits — the perfect everyday kit for weddings, commercials, interviews, and documentary filmmaking.",
    dailyRate: 2500,
  },
];

export const accessories: Accessory[] = [
  {
    slug: "steadicam-m2",
    name: "Steadicam M-2 Along With Operator",
    category: "Stabilizers",
    image:
      "/images/equipment/accessories/steadicam.webp",
    description:
      "Camera stabilization system with an experienced operator for smooth, controlled movement and fluid tracking shots.",
    dailyRate: 20000,
    featured: true,
  },
  {
    slug: "dji-rs4",
    name: "DJI RS 4 Gimbal",
    category: "Stabilizers",
    image:
      "/images/equipment/accessories/gimbal_rs4.jpg",
    description:
      "Professional camera gimbal delivering smooth, stable footage with fast balancing and precise movement control.",
    dailyRate: 1000,
    featured: true,
  },
  {
    slug: "nd-filters",
    name: "TIFFIN ND 3, 6, 9, 1.2 IR",
    category: "Filters",
    image:
      "/images/equipment/accessories/filters.jpg",
    description:
      "Professional cinema ND filters for precise exposure control while maintaining natural color and image quality.",
    dailyRate: 1000,
    featured: true,
  },
  {
    slug: "tilta-necleus",
    name: "Tilta Nucleus (Wireless Follow Focus)",
    category: "Lens Control",
    image:
      "/images/equipment/accessories/cmotion.jpg",
    description:
      "Compact wireless focus control system designed for smooth, accurate lens pulls and professional cinema setups.",
    dailyRate: 1000,
  },
  {
    slug: "hollyland-wireless",
    name: "Hollyland Wireless Video",
    category: "Wireless Video",
    image:
      "/images/equipment/accessories/hollyland.jpg",
    description:
      "Reliable wireless video transmission system for real-time monitoring and professional production workflows.",
    dailyRate: 1000,
  },
  {
    slug: "atmos-shougun",
    name: "Atomos Shogun",
    category: "Monitors",
    image:
      "/images/equipment/accessories/shogun.jpg",
    description:
      "Professional HDR monitor and recorder offering high-quality monitoring, recording, and playback for cinema production.",
    dailyRate: 1000,
  },
  {
    slug: "panasonic-monitor",
    name: "Panasonic 17-inch Director Monitor",
    category: "Monitors",
    image:
      "/images/equipment/accessories/monitor.jpg",
    description:
      "Professional large-format monitor designed for directors and on-set viewing, providing clear and detailed image monitoring.",
    dailyRate: 1000,
  },
  {
    slug: "tripods-heads",
    name: "Tripods Along With Heads",
    category: "Support",
    image:
      "/images/equipment/accessories/tripod.jpg",
    description:
      "Stable camera support with smooth head movement for steady shots, framing, and controlled camera motion.",
    dailyRate: 700,
  },
  {
    slug: "patla-setup",
    name: "Patla Setup (Alti-Palti)",
    category: "Support",
    image:
      "/images/equipment/accessories/patla_set.jpg",
    description:
      "Versatile wooden platform set for supporting cameras, monitors, laptops, and other production equipment at different heights.",
    dailyRate: 500,
  },
];

// Items that appear ONLY on the Rate Card — not shown as an Equipment
// card. Use this for small add-ons, consumables, or charges that don't
// need a photo/description (extra batteries, memory cards, delivery
// charges, extended-hours pricing, etc).
export type RateCardOnlyItem = {
  slug: string;
  name: string;
  category: string;
  dailyRate: number;
};

export const rateCardOnlyItems: RateCardOnlyItem[] = [
  { slug: "lilliput", name: "Lilliput", category: "Monitors", dailyRate: 1000 },
  { slug: "nd", name: "Variable ND", category: "Filters", dailyRate: 200 },
  { slug: "matte-box-6", name: "Matte Box - 6 x 6", category: "Add-ons", dailyRate: 700 },
  { slug: "matte-box-4", name: "Matte Box - 4 x 4", category: "Add-ons", dailyRate: 500 },
  { slug: "memory-card-120gb", name: "Prograde 120GB High Speed Card", category: "Add-ons", dailyRate: 500 },
];

export const allEquipment = [
  ...cameras.map((c) => ({
    slug: c.slug,
    name: `${c.brand} ${c.model}`,
    category: "Cameras" as const,
    dailyRate: c.dailyRate,
  })),
  ...lenses.map((l) => ({
    slug: l.slug,
    name: l.name,
    category: "Lenses" as const,
    dailyRate: l.dailyRate,
  })),
  ...accessories.map((a) => ({
    slug: a.slug,
    name: a.name,
    category: a.category as string,
    dailyRate: a.dailyRate,
  })),
  ...rateCardOnlyItems,
];
