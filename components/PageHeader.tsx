export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <>
      <p className="eyebrow text-brass">{eyebrow}</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-ivory md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-muted">
          {description}
        </p>
      )}
    </>
  );
}
