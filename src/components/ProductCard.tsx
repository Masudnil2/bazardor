import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPct, formatPrice, formatUnit, getDir } from "@/lib/formate";

const BADGE = {
  up: "bg-up/10 text-up",
  down: "bg-down/10 text-down",
  flat: "bg-black/5 text-muted",
};
const ARROW = { up: "▲", down: "▼", flat: "—" };

export default function ProductCard({ product }: { product: Product }) {
  const dir = getDir(product);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/5 text-2xl">
          {product.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-ink">{product.nameBn}</h3>
          <p className="text-xs text-muted">{formatUnit(product.unit)}</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-muted">আজকের দাম</p>
          <p className="text-lg font-bold text-ink">
            {formatPrice(product.today)}
          </p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${BADGE[dir]}`}
        >
          {ARROW[dir]} {formatPct(product.change.pct)}
        </span>
      </div>
    </Link>
  );
}