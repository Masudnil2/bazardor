import { Product } from "@/lib/types";
import { formatPct, formatShortUnit, getDir, toBn } from "@/lib/formate";

const COLOR = { up: "text-up", down: "text-down", flat: "text-muted" };
const ARROW = { up: "▲", down: "▼", flat: "—" };

export default function Ticker({ products }: { products: Product[] }) {
  
  const items = [...products, ...products];

  return (
    <div className="marquee overflow-hidden border-b border-line bg-surface">
      <div className="animate-marquee flex w-max">
        {items.map((p, i) => {
          const dir = getDir(p);
          return (
            <div
              key={`${p.id}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap border-r border-line px-5 py-2.5 text-sm"
            >
              <span>{p.image}</span>
              <span className="font-medium text-ink">{p.nameBn}</span>
              <span className="text-muted">
                {toBn(p.today.toLocaleString("en-US"))} {formatShortUnit(p.unit)}
              </span>
              <span className={`font-semibold ${COLOR[dir]}`}>
                {ARROW[dir]} {formatPct(p.change.pct)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}