export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-brass">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-wide text-ivory md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ivory-muted">
          {description}
        </p>
      )}
    </div>
  );
}
