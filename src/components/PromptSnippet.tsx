"use client";

import { useState } from "react";

type PromptSnippetProps = {
  title: string;
  text: string;
  subtitle?: string;
  defaultOpen?: boolean;
};

export default function PromptSnippet({ title, text, subtitle, defaultOpen = false }: PromptSnippetProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  }

  return (
    <section className="border border-black/10 rounded-md bg-white/70 shadow-sm overflow-hidden">
      <button
        type="button"
        className="w-full text-left px-3 sm:px-4 py-3 flex items-center justify-between hover:bg-black/[0.03] focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`panel-${title}`}
     >
        <span className="flex-1 min-w-0">
          <span className="block font-medium truncate">{title}</span>
          {subtitle && (
            <span className="block text-xs opacity-60 truncate mt-0.5">Examples: {subtitle}</span>
          )}
        </span>
        <span className="text-sm opacity-60">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div id={`panel-${title}`} className="border-t border-black/10 p-0 bg-white">
          <div
            onClick={copy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(); } }}
            className="relative group cursor-pointer bg-white hover:bg-yellow-50 focus-visible:bg-yellow-50 border-t border-black/10 hover:border-yellow-200 p-3 sm:p-4 font-sans transition-colors"
            aria-label="Copy snippet"
            aria-live="polite"
          >
            <span
              className={`absolute right-2 -top-2 text-[11px] sm:text-xs px-2 py-1 rounded-md border shadow-sm transition-all duration-200 ${
                copied
                  ? "bg-green-100 border-green-300 text-green-800 scale-105"
                  : "bg-yellow-100 border-yellow-300 text-yellow-800 group-hover:shadow"
              }`}
            >
              {copied ? "Copied!" : "Click to copy"}
            </span>
            <div className="whitespace-pre-wrap text-sm leading-snug selection:bg-yellow-200/70">
{text}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
