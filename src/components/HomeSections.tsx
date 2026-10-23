import { getProducts } from "@/lib/api";
import { getDir, toBn } from "@/lib/formate";
import ProductGrid from "./ProductGrid";

export default async function HomeSections() {
  const products = await getProducts();

  
  const risers = products
    .filter((p) => getDir(p) === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  
  const fallers = products
    .filter((p) => getDir(p) === "down")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-base text-up">▲</span> আজ দাম বেড়েছে
        </h2>
        <ProductGrid products={risers} />
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-base text-down">▼</span> আজ দাম কমেছে
        </h2>
        <ProductGrid products={fallers} />
      </section>

      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <p className="mb-4 mt-1 text-sm text-muted">
          সব ক্যাটাগরির {toBn(products.length)}টি পণ্যের আজকের দাম
        </p>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}