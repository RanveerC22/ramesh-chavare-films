const items = [
  "KOLHAPUR, MAHARASHTRA",
  "EST. 2014",
  "500+ SHOOTS SUPPORTED",
  "SAME-DAY PICKUP",
  "GEAR TESTED BEFORE EVERY RENTAL",
  "24/7 WHATSAPP SUPPORT",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-surface-border bg-surface py-3">
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="timecode flex items-center gap-3 text-xs text-ivory-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tally tally-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
