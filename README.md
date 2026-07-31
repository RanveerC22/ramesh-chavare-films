# Ramesh Chavare Films & Camera Rentals

Kolhapur's Most Trusted Film Gear Partner — a premium, cinematic, mobile-first
marketing website for a professional film equipment rental company.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.
No backend, no database, no login, no payment gateway — fully static,
deployable on Vercel in minutes.

---

## 1. Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

---

## 2. Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**. That's it — no backend or database setup needed.

---

## 3. Project structure

```
app/
  layout.tsx          Root layout: fonts, SEO metadata, Navbar/Footer
  page.tsx             Home page
  equipment/page.tsx    Equipment (Cameras, Lenses, Accessories)
  rate-card/page.tsx    Rate Card (search, filter, download PDF)
  gallery/page.tsx      Gallery (masonry + lightbox)
  about/page.tsx        About Us
  contact/page.tsx      Contact (phone, WhatsApp, email, map)
  sitemap.ts            Auto-generated sitemap.xml
  robots.ts             Auto-generated robots.txt
  not-found.tsx          Styled 404 page
  globals.css            Design tokens, textures, print styles

components/             Reusable UI: Navbar, Footer, cards, gallery, etc.

data/
  siteConfig.ts          Business info, phone/WhatsApp/email/address/socials
  equipment.ts            Cameras, Lenses, Accessories catalog
  content.ts               Gallery images, testimonials, featured productions

public/
  rate-card.pdf            Downloadable rate card PDF
  favicon.ico, icons        Site icons
```

---

## 4. Editing content (no code changes needed)

### Contact details, phone numbers, socials, business hours
Edit `data/siteConfig.ts`. Every phone number, WhatsApp link, email,
address, map link, and social URL on the site is pulled from this one file.

### Adding a new camera, lens, or accessory
Open `data/equipment.ts` and copy an existing object inside the `cameras`,
`lenses`, or `accessories` array, then edit the fields:

```ts
{
  slug: "new-camera-slug",
  brand: "Sony",
  model: "Cinema Line FX9",
  image: "https://your-image-url.com/photo.jpg",
  description: "Short description of the camera.",
  specs: ["Full-Frame 6K", "15 Stops DR", "E-Mount"],
  dailyRate: 6000,
}
```

It will automatically appear on the Home page (if `featured: true`), the
Equipment page, and the Rate Card — no other file needs to change.

### Adding new gallery photos
Open `data/content.ts` and add an object to the `galleryImages` array:

```ts
{
  id: "g10",
  src: "https://your-image-url.com/photo.jpg",
  alt: "Description of the photo",
  category: "Weddings", // or "Commercial Shoots" / "Set Shoots" / "Behind the Scenes"
}
```

### Adding testimonials
Add an object to the `testimonials` array in `data/content.ts`.

### Replacing placeholder photography
All images currently use Unsplash stock photography as placeholders so the
site looks complete out of the box. For production, replace the `image` /
`src` URLs in `data/equipment.ts` and `data/content.ts` with your own photos.
You can either:
- Host images in `/public/images/` and reference them as `/images/filename.jpg`, or
- Use any external image URL (already supported in `next.config.js`).

### Replacing the downloadable rate card
Replace `public/rate-card.pdf` with your own exported PDF (same filename),
or update `rateCardPdfUrl` in `data/siteConfig.ts` if you rename the file.

### Updating the Google Maps embed
Replace `contact.mapEmbedUrl` and `contact.mapLinkUrl` in
`data/siteConfig.ts` with your exact business location.

---

## 5. Design system

- **Colors**: near-black ink background, warm ivory text, brushed brass
  accent, and a restrained tally-red used only for record/live indicators.
- **Type**: Big Shoulders Display (condensed, cinematic headlines), Inter
  (body copy), IBM Plex Mono (technical specs, prices, timecodes).
- **Signature motifs**: a scrolling timecode ticker, a clapperboard stripe
  divider, and a pulsing "tally light" dot — all referencing on-set camera
  and slate details.

All design tokens live in `tailwind.config.ts` and `app/globals.css`.

---

## 6. SEO

- Metadata (title, description, Open Graph, Twitter cards) is set per-page
  via Next.js Metadata API.
- `LocalBusiness` structured data (JSON-LD) is included in `app/layout.tsx`
  — update the fields there if your business schema needs change.
- `sitemap.xml` and `robots.txt` are generated automatically from
  `app/sitemap.ts` and `app/robots.ts`.
- Update `siteConfig.url` in `data/siteConfig.ts` to your live domain before
  deploying, so canonical URLs and sitemaps are correct.

---

Designed by Ramesh Chavare Films.
