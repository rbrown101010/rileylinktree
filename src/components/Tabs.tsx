"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultId?: string;
  wrapCols?: number; // optional number of columns to wrap into
  scrollable?: boolean; // horizontal scroll row instead of wrapping
};

export default function Tabs({ tabs, defaultId, wrapCols, scrollable }: TabsProps) {
  const [active, setActive] = useState<string>(defaultId ?? tabs[0]?.id ?? "");

  return (
    <div>
      {wrapCols ? (
        <div
          role="tablist"
          aria-label="Sections"
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${Math.max(1, Math.min(8, wrapCols))}, minmax(0, 1fr))` }}
        >
          {tabs.map((t) => {
            const selected = active === t.id;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md border transition-colors ${
                  selected
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/10 hover:bg-black/[0.03]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      ) : scrollable ? (
        <div
          role="tablist"
          aria-label="Sections"
          className="flex flex-nowrap gap-2 overflow-x-auto -mx-4 px-4"
        >
          {tabs.map((t) => {
            const selected = active === t.id;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`flex-shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md border transition-colors ${
                  selected
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/10 hover:bg-black/[0.03]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div
          role="tablist"
          aria-label="Sections"
          className="inline-flex rounded-md border border-black/10 overflow-hidden bg-white"
        >
          {tabs.map((t, i) => {
            const selected = active === t.id;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm border-black/10 ${
                  i < tabs.length - 1 ? "border-r" : ""
                } ${
                  selected
                    ? "bg-black text-white"
                    : "bg-white hover:bg-black/[0.03] text-black"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-4">
        {tabs.map((t) => (
          <div
            key={t.id}
            id={`panel-${t.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${t.id}`}
            hidden={active !== t.id}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
