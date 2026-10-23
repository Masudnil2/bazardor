"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Category, Product } from "@/lib/types";
import { toBn } from "@/lib/formate";
import ProductGrid from "./ProductGrid";

type SortKey = "default" | "asc" | "desc";

export default function CategoryView({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const [sort, setSort] = useState<SortKey>("default");

  
  const sorted = useMemo(() => {
    if (sort === "asc") return [...products].sort((a, b) => a.today - b.today);
    if (sort === "desc") return [...products].sort((a, b) => b.today - a.today);
    return products;
  }, [products, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-3xl border border-line">
            {category.icon}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              {category.nameBn}
            </h1>
            <p className="text-sm text-muted">
              {toBn(products.length)}টি পণ্য
            </p>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          সাজান:
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none rounded-full border border-line bg-surface py-2 pl-4 pr-9 text-sm text-ink focus:border-brand focus:outline-none"
            >
              <option value="default">ডিফল্ট</option>
              <option value="asc">দাম: কম থেকে বেশি</option>
              <option value="desc">দাম: বেশি থেকে কম</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            />
          </span>
        </label>
      </div>

      {sorted.length === 0 ? (
        <div className="rounded-2xl border border-line bg-surface py-16 text-center">
          <p className="text-lg font-semibold">এই ক্যাটাগরিতে কোনো পণ্য নেই</p>
          <Link href="/" className="btn mt-4 border-brand bg-brand text-white hover:bg-brand-dark">
            হোম পেজে ফিরে যান
          </Link>
        </div>
      ) : (
        <ProductGrid products={sorted} />
      )}
    </div>
  );
}