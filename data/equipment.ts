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
    slug: "red-v-raptor-xl",
    brand: "RED",
    model: "V-Raptor XL 8K VV",
    image:
      "https://picsum.photos/seed/rcf-red-v-raptor-xl/1200/900",
    description:
      "Flagship full-frame cinema camera for high-end wedding features, commercials, and narrative work. Exceptional dynamic range and modularity.",
    specs: ["8K VV Sensor", "17+ Stops DR", "Up to 120fps in 8K", "RF Mount"],
    dailyRate: 18000,
    featured: true,
  },
  {
    slug: "arri-alexa-mini-lf",
    brand: "ARRI",
    model: "Alexa Mini LF",
    image:
      "https://picsum.photos/seed/rcf-arri-alexa-mini-lf/1200/900",
    description:
      "Industry-standard large-format cinema camera known for its signature ARRI colour science and reliability on demanding sets.",
    specs: ["LF Sensor", "14+ Stops DR", "ARRI LPL Mount", "4.5K ProRes"],
    dailyRate: 22000,
    featured: true,
  },
  {
    slug: "sony-fx6",
    brand: "Sony",
    model: "Cinema Line FX6",
    image:
      "https://picsum.photos/seed/rcf-sony-fx6/1200/900",
    description:
      "Compact full-frame cinema camera ideal for run-and-gun wedding coverage and documentary-style shoots with dual base ISO.",
    specs: ["Full-Frame 4K", "Dual Base ISO", "E-Mount", "120fps 4K"],
    dailyRate: 6500,
    featured: true,
  },
  {
    slug: "sony-fx3",
    brand: "Sony",
    model: "Cinema Line FX3",
    image:
      "https://picsum.photos/seed/rcf-sony-fx3/1200/900",
    description:
      "Compact and lightweight, built for gimbal and handheld work where size and low-light performance matter most.",
    specs: ["Full-Frame 4K", "S-Cinetone", "E-Mount", "Built-in Fan"],
    dailyRate: 5000,
  },
  {
    slug: "blackmagic-ursa-12k",
    brand: "Blackmagic Design",
    model: "URSA Mini Pro 12K",
    image:
      "https://picsum.photos/seed/rcf-blackmagic-ursa-12k/1200/900",
    description:
      "Extreme resolution for commercial and VFX-heavy productions requiring maximum reframing flexibility in post.",
    specs: ["12K Super 35", "14 Stops DR", "PL/EF Mount", "Blackmagic RAW"],
    dailyRate: 9000,
  },
  {
    slug: "canon-c300-mk3",
    brand: "Canon",
    model: "EOS C300 Mark III",
    image:
      "https://picsum.photos/seed/rcf-canon-c300-mk3/1200/900",
    description:
      "Dependable Super 35 workhorse with a proven autofocus system, well suited to interviews and event coverage.",
    specs: ["Super 35 DGO", "16 Stops DR", "EF/PL Mount", "Dual Pixel AF"],
    dailyRate: 7000,
  },
];

export const lenses: Lens[] = [
  {
    slug: "zeiss-supreme-prime-set",
    name: "Zeiss Supreme Prime Set (5 lenses)",
    mount: "PL",
    focalLength: "21 / 29 / 40 / 65 / 100mm",
    image:
      "https://picsum.photos/seed/rcf-zeiss-supreme-prime-set/1200/900",
    description:
      "A full set of modern cinema primes with consistent colour rendering and a gentle, flattering falloff — a favourite for feature work.",
    dailyRate: 12000,
    featured: true,
  },
  {
    slug: "cooke-s4i-set",
    name: "Cooke S4/i Prime Set (5 lenses)",
    mount: "PL",
    focalLength: "18 / 25 / 32 / 50 / 75mm",
    image:
      "https://picsum.photos/seed/rcf-cooke-s4i-set/1200/900",
    description:
      "The legendary 'Cooke Look' — warm skin tones and smooth bokeh, prized by wedding and portrait cinematographers.",
    dailyRate: 10000,
    featured: true,
  },
  {
    slug: "sigma-art-prime-set",
    name: "Sigma Art Prime Set (4 lenses)",
    mount: "EF / E",
    focalLength: "24 / 35 / 50 / 85mm",
    image:
      "https://picsum.photos/seed/rcf-sigma-art-prime-set/1200/900",
    description:
      "Sharp, contrasty, and budget-friendly — an excellent option for content creators and independent filmmakers.",
    dailyRate: 3500,
  },
  {
    slug: "canon-cn-e-zoom",
    name: "Canon CN-E 30-105mm T2.8",
    mount: "EF / PL",
    focalLength: "30–105mm",
    image:
      "https://picsum.photos/seed/rcf-canon-cn-e-zoom/1200/900",
    description:
      "A versatile cinema zoom that keeps focus consistent through the range — ideal for run-and-gun documentary coverage.",
    dailyRate: 3000,
  },
  {
    slug: "sirui-anamorphic-set",
    name: "Sirui 1.6x Anamorphic Set",
    mount: "E / RF",
    focalLength: "24 / 35 / 50 / 75mm",
    image:
      "https://picsum.photos/seed/rcf-sirui-anamorphic-set/1200/900",
    description:
      "Signature oval bokeh and horizontal flares for productions chasing a distinct widescreen cinematic look.",
    dailyRate: 4500,
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

// Convenience export used by the Rate Card page.
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
];
