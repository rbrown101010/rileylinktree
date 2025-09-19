"use client";

import Link from "next/link";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white text-black select-none">
      {/* Signature / Name - tiny, keeps the page from feeling empty while still minimal */}
      <div className="absolute left-4 top-4 text-2xl md:text-4xl signature">riley brown</div>
      {/* Social icons centered above the main links */}

      {/* Screen reader helper so the nav is still discoverable */}
      <p className="sr-only">Navigation links are visible; hover to highlight them with color.</p>

      {/* Centered list so links are always visible */}
      <nav aria-label="Primary" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 md:gap-8">
        <Socials />
        <div className="text-xl md:text-2xl font-bold opacity-80 text-center">What I'm Building</div>
        <Link href="/vibecode-app" className="reveal-link link-highlight hl-green text-xl md:text-3xl text-center"><span className="label-nudge block text-center">Vibecode app</span></Link>
        <Link href="/youtube-channel" className="reveal-link link-highlight hl-red text-xl md:text-3xl text-center"><span className="label-nudge block text-center">sandbox</span></Link>
        <div className="text-xl md:text-2xl font-bold opacity-80 text-center mt-8 md:mt-10">You can Build</div>
        <Link href="/building-a-game" className="reveal-link link-highlight hl-purple hover-white text-xl md:text-3xl text-center"><span className="label-nudge block text-center">a game</span></Link>
        <Link href="/building-an-app" className="reveal-link link-highlight hl-blue hover-white text-xl md:text-3xl text-center"><span className="label-nudge block text-center">an app</span></Link>
        <Link href="/interests" className="reveal-link link-highlight hl-yellow text-xl md:text-3xl text-center"><span className="label-nudge block text-center">Interests</span></Link>
      </nav>

      {/* Footer hint (barely visible) */}
      <div className="absolute bottom-4 right-4 text-xs opacity-40">hover to highlight</div>
    </main>
  );
}
