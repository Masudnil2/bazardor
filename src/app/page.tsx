import { getProducts, getCategories } from "@/lib/api";
import { formatPrice, formatUnit, formatPct, getDir } from "@/lib/formate";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const units = [...new Set(products.map((p) => p.unit))];
  const dirs = [...new Set(products.map((p) => p.change.dir))];

  return (
    <main className="p-8 space-y-2">
      <p>পণ্য: {products.length}, ক্যাটাগরি: {categories.length}</p>
      <p>units: {units.join(", ")}</p>
      <p>dirs: {dirs.join(", ")}</p>
      {products.slice(0, 5).map((p) => (
        <p key={p.id}>
          {p.image} {p.nameBn} — {formatPrice(p.today)} ({formatUnit(p.unit)}){" "}
          {getDir(p)} {formatPct(p.change.pct)}
        </p>
      ))}
    </main>
  );
}