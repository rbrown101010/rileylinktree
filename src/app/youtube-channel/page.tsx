import Link from "next/link";

export default function YoutubeChannelPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/" className="reveal-link link-highlight hl-blue text-base">
          <span className="label-nudge">← Home</span>
        </Link>

        <h1 className="text-3xl mt-6 mb-2">Youtube Channel</h1>
        <p className="opacity-60">Curated resources and series.</p>
      </div>
    </main>
  );
}
