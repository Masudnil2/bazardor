import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getProducts } from "@/lib/api";
import CategoryView from "@/components/CategoryView";
import { CategorySkeleton } from "@/components/Skeletons";

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category || !category.nameBn) notFound();

  const products = await getProducts(slug);
  return <CategoryView category={category} products={products} />;
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}