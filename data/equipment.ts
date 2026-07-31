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
      "https://images.unsplash.com/photo-1585828922344-85b0a2c04302?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1606986628253-05620e9ee0a7?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1500310527395-b1a05a4e5bcc?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
    description:
      "Compact 3-axis gimbal supporting most mirrorless and cinema camera bodies for handheld cinematic motion.",
    dailyRate: 1800,
    featured: true,
  },
  {
    slug: "aputure-600d-pro",
    name: "Aputure 600D Pro",
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1594394352636-2dc1a4b7c1c8?q=80&w=1200&auto=format&fit=crop",
    description:
      "Powerful daylight-balanced LED fixture for key lighting on location or in-studio shoots.",
    dailyRate: 2200,
    featured: true,
  },
  {
    slug: "aputure-300x-set",
    name: "Aputure 300X Two-Light Set",
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Two matched bi-colour LEDs with softboxes — a complete two-point lighting kit for interviews and portraits.",
    dailyRate: 3000,
  },
  {
    slug: "sennheiser-wireless-lav",
    name: "Sennheiser EW 112P G4 Wireless Lav",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Reliable wireless lavalier system for clean dialogue capture during interviews and event coverage.",
    dailyRate: 1200,
  },
  {
    slug: "rode-ntg5",
    name: "Rode NTG5 Shotgun Mic Kit",
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    description:
      "Broadcast-grade shotgun microphone with boom pole and blimp for on-camera and boom-operated audio.",
    dailyRate: 900,
  },
  {
    slug: "atomos-ninja-v",
    name: "Atomos Ninja V Monitor-Recorder",
    category: "Monitors",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop",
    description:
      "5-inch HDR monitor and ProRes RAW recorder for accurate on-set exposure and focus checking.",
    dailyRate: 1500,
  },
  {
    slug: "manfrotto-tripod-kit",
    name: "Manfrotto 504X Fluid Head Tripod",
    category: "Support",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional fluid-head tripod system delivering smooth pans and reliable support for cinema bodies.",
    dailyRate: 800,
  },
  {
    slug: "slider-motorized",
    name: "Motorised Camera Slider (100cm)",
    category: "Support",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
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
