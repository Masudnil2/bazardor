"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Category } from "@/lib/types";
import { getBanglaDate } from "@/lib/formate";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <header className="bg-surface border-b border-line">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Image
              src="/logo-icon.png"
              alt=""
              width={22}
              height={22}
              className="brightness-0 invert"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-ink">বাজার দর</span>
            <span className="block text-xs text-muted">{getBanglaDate()}</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm sm:btn-md border-brand bg-brand text-white hover:bg-brand-dark"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      
      <nav className="border-t border-line">
        <ul className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const href = `/category/${cat.slug}`;
            const active = pathname === href;
            return (
              <li key={cat.id}>
                <Link
                  href={href}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-brand/10 font-semibold text-brand"
                      : "text-ink hover:bg-black/5"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.nameBn}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}