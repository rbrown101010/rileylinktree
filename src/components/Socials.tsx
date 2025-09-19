"use client";

import { socials } from "@/data/socials";

type IconProps = { className?: string };

function YouTube({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23 7.5c0-1.7-1.3-3-3-3H4c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-9Z"/>
      <path fill="#fff" d="M10 15.5V8.5l6 3.5-6 3.5Z"/>
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 3H22l-7.7 8.7L22.8 21h-6.3l-4.9-6.3-5.6 6.3H2l8.2-9.2L1.5 3h6.4l4.5 5.8L18.9 3Z"/>
    </svg>
  );
}

function GitHub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .6a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 .1.8-.8 1.9-1 3.1-.3 6.3-1.5 6.3-6.9 0-1.5-.5-2.8-1.3-3.7.1-.4.6-1.7-.1-3.5 0 0-1.2-.4-3.9 1.4a13.2 13.2 0 0 0-7.1 0C1.9 2.5.7 3 .7 3c-.7 1.8-.2 3.1-.1 3.5-.8.9-1.3 2.2-1.3 3.7 0 5.4 3.2 6.6 6.3 6.9-.5.3-.9 1-.9 1.9v2.8c0 .3.2.7.9.6A11.4 11.4 0 0 0 12 .6Z"/>
    </svg>
  );
}

function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/>
      <circle cx="12" cy="12" r="3.5" fill="#fff"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="#fff"/>
    </svg>
  );
}

function TikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 2h3c.3 2.3 1.7 4.1 4.5 4.5v3c-1.8.1-3.3-.4-4.6-1.2v7.4a7.7 7.7 0 1 1-7.7-7.7c.3 0 .6 0 .9.1v3.4c-.2-.1-.5-.1-.9-.1a4.3 4.3 0 1 0 4.3 4.3V2Z"/>
    </svg>
  );
}

function LinkedIn({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v12H3v-12Zm6 0h3.8v1.6h.1A4.1 4.1 0 0 1 17 8.7c3 0 3.6 2 3.6 4.7v7.6h-4v-6.7c0-1.6 0-3.8-2.3-3.8-2.4 0-2.8 1.8-2.8 3.6v6.9H9v-12Z"/>
    </svg>
  );
}

const iconByName: Record<string, (p: IconProps) => JSX.Element> = {
  YouTube: YouTube,
  X: XIcon,
  GitHub: GitHub,
  Instagram: Instagram,
  TikTok: TikTok,
  LinkedIn: LinkedIn,
};

export default function Socials() {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {socials.map((s) => {
        const Icon = iconByName[s.name] ?? GitHub;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className="icon-hover inline-flex items-center justify-center h-8 w-8 md:h-9 md:w-9 text-black/80 hover:text-black"
          >
            <Icon className="h-6 w-6 md:h-7 md:w-7" />
          </a>
        );
      })}
    </div>
  );
}

