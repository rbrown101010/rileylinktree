"use client";

import { useState } from "react";

export type Resource = {
  name: string;
  description: string;
  href: string;
};

type ResourceTableProps = {
  rows: Resource[];
  className?: string;
};

export default function ResourceTable({ rows, className = "" }: ResourceTableProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function copyRow(i: number) {
    const r = rows[i];
    const text = `${r.name}\n${r.description}\n${r.href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(i);
      setTimeout(() => setCopiedIndex(null), 1400);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  }

  return (
    <div className={`overflow-x-auto -mx-4 sm:mx-0 ${className}`}>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b border-black/10">
            <th className="py-2 px-4 w-[18ch]">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4 w-[22ch]">Link</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.name}
              className="cursor-pointer border-b border-black/5 hover:bg-black/[0.035]"
              onClick={() => copyRow(i)}
              aria-label={`Copy ${r.name} row`}
            >
              <td className="py-3 px-4 font-medium">
                <div className="flex items-center gap-2"><span>{r.name}</span></div>
              </td>
              <td className="py-3 px-4 text-black/80">{r.description}</td>
              <td className="py-3 px-4">
                <div className="relative inline-flex items-center">
                  {r.href?.trim() ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-black/30 hover:decoration-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {r.href}
                    </a>
                  ) : (
                    <span className="opacity-50">—</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {copiedIndex !== null && (
        <div
          className="pointer-events-none fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-black/15 bg-white/95 shadow-xl flex items-center gap-3 animate-toast"
          aria-live="polite"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F4CB.svg"
            alt="Copied"
            className="h-10 w-10 sm:h-12 sm:w-12"
            loading="lazy"
            decoding="async"
          />
          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-semibold">Copied!</div>
            <div className="text-xs sm:text-sm opacity-70">Name, description, and link are on your clipboard.</div>
          </div>
        </div>
      )}
    </div>
  );
}
