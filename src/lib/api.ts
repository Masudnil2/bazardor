import { cacheLife } from "next/cache";
import { Category, Product } from "./types";

const BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

export async function getProducts(category?: string): Promise<Product[]> {
  "use cache";
  cacheLife("minutes");

  const url = category
    ? `${BASE_URL}/products?category=${category}`
    : `${BASE_URL}/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${BASE_URL}/products?slug=${slug}`);
  if (!res.ok) return null;
  const list: Product[] = await res.json();
  if (!list.length) return null;

  
  const full = await fetch(`${BASE_URL}/products/${list[0].id}`);
  if (!full.ok) return list[0];
  return full.json();
}

export async function getCategories(): Promise<Category[]> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${BASE_URL}/categories/${slug}`);
  if (!res.ok) return null;
  return res.json();
}