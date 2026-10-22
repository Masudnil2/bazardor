import { Category, Product } from "./types";

const BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${BASE_URL}/products?category=${category}`
    : `${BASE_URL}/products`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products?slug=${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const list: Product[] = await res.json();
  if (!list.length) return null;

  
  const full = await fetch(`${BASE_URL}/products/${list[0].id}`, {
    cache: "no-store",
  });
  if (!full.ok) return list[0];
  return full.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const res = await fetch(`${BASE_URL}/categories/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}