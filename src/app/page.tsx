import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-6 sm:px-6">
      <Hero />

      
      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
      </section>
    </main>
  );
}