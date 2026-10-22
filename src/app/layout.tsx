import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Tricker";
import { getCategories, getProducts } from "@/lib/api";

const bangla = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <html lang="bn" data-theme="light">
      <body className={`${bangla.variable} antialiased`}>
        <Navbar categories={categories} />
        <Ticker products={products} />
        {children}
      </body>
    </html>      
  );
}