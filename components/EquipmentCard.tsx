import Image from "next/image";

export default function EquipmentCard({
  image,
  title,
  subtitle,
  description,
  tags,
  price,
  category,
}: {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  price: number;
  category: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-md border border-surface-border bg-surface shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brass backdrop-blur">
          {category}
        </span>
        <span className="timecode absolute bottom-3 right-3 rounded-sm bg-brass px-2.5 py-1 text-xs font-semibold text-ink">
          ₹{price.toLocaleString("en-IN")}/day
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ivory">
          {title}
        </h3>
        {subtitle && (
          <p className="eyebrow mt-1 text-ivory-dim">{subtitle}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-surface-border pt-3">
            {tags.map((tag) => (
              <li key={tag} className="timecode text-[11px] text-ivory-dim">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
