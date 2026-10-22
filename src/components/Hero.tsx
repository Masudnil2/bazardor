import Image from "next/image";
import { getBanglaDate } from "@/lib/formate";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-line bg-surface px-6 py-8 sm:px-10 sm:py-10">
      <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
        
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            {getBanglaDate()}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="btn mt-6 border-brand bg-brand text-white shadow-md hover:bg-brand-dark"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="ফলের ঝুড়ি"
            width={320}
            height={260}
            priority
            className="h-auto w-48 sm:w-64 md:w-full md:max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}