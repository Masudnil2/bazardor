import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
      <p className="text-6xl">🧺</p>
      <h1 className="mt-4 text-3xl font-bold text-ink">
        ৪০৪ — পেজটি পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-muted">
        আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।
      </p>
      <Link
        href="/"
        className="btn mt-6 border-brand bg-brand text-white hover:bg-brand-dark"
      >
        হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}