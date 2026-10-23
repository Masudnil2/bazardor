import { Suspense } from "react";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import { HomeSkeleton } from "@/components/Skeletons";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-6 sm:px-6">
      <Hero />
      <Suspense fallback={<HomeSkeleton />}>
        <HomeSections />
      </Suspense>
    </main>
  );
}