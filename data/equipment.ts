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
    slug: "dji-ronin-4d",
    name: "DJI Ronin 4D",
    category: "Stabilizers",
    image:
      "https://picsum.photos/seed/rcf-dji-ronin-4d/1200/900",
    description:
      "Integrated gimbal camera system with built-in LiDAR focusing — smooth, cable-free stabilised movement.",
    dailyRate: 5500,
    featured: true,
  },
  {
    slug: "dji-rs3-pro",
    name: "DJI RS 3 Pro Gimbal",
    category: "Stabilizers",
    image:
      "https://picsum.photos/seed/rcf-dji-rs3-pro/1200/900",
    description:
      "Compact 3-axis gimbal supporting most mirrorless and cinema camera bodies for handheld cinematic motion.",
    dailyRate: 1800,
    featured: true,
  },
  {
    slug: "rode-ntg5",
    name: "Rode NTG5 Shotgun Mic Kit",
    category: "Audio",
    image:
      "https://picsum.photos/seed/rcf-rode-ntg5/1200/900",
    description:
      "Broadcast-grade shotgun microphone with boom pole and blimp for on-camera and boom-operated audio.",
    dailyRate: 900,
  },
  {
    slug: "atomos-ninja-v",
    name: "Atomos Ninja V Monitor-Recorder",
    category: "Monitors",
    image:
      "https://picsum.photos/seed/rcf-atomos-ninja-v/1200/900",
    description:
      "5-inch HDR monitor and ProRes RAW recorder for accurate on-set exposure and focus checking.",
    dailyRate: 1500,
  },
  {
    slug: "manfrotto-tripod-kit",
    name: "Manfrotto 504X Fluid Head Tripod",
    category: "Support",
    image:
      "https://picsum.photos/seed/rcf-manfrotto-tripod-kit/1200/900",
    description:
      "Professional fluid-head tripod system delivering smooth pans and reliable support for cinema bodies.",
    dailyRate: 800,
  },
  {
    slug: "slider-motorized",
    name: "Motorised Camera Slider (100cm)",
    category: "Support",
    image:
      "https://picsum.photos/seed/rcf-slider-motorized/1200/900",
    description:
      "Programmable motorised slider for smooth, repeatable camera moves in product and interview setups.",
    dailyRate: 1600,
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
  { slug: "extra-battery", name: "Extra Battery Pack", category: "Add-ons", dailyRate: 300 },
  { slug: "memory-card-128gb", name: "128GB CFexpress Card", category: "Add-ons", dailyRate: 500 },
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
