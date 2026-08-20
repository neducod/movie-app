"use client";

import { MOODS } from "@/data/moods";

export function MoodChips({ selected, onSelect }) {
  return (
    <div role="radiogroup" aria-label="Current mood" className="flex flex-wrap gap-3">
      {MOODS.map((mood) => {
        const isActive = selected === mood.id;
        return (
          <button
            key={mood.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            title={mood.description}
            onClick={() => onSelect(mood.id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-chip border font-body font-semibold text-sm tracking-wide cursor-pointer select-none transition-all duration-300 ease-netflix hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2 ${
              isActive
                ? "text-textPrimary scale-105"
                : "text-textMuted bg-white/[0.03] border-border hover:border-borderStrong hover:text-textPrimary"
            }`}
            style={
              isActive
                ? {
                    borderColor: mood.glow.primary,
                    backgroundColor: `color-mix(in srgb, ${mood.glow.primary} 18%, transparent)`,
                    boxShadow: `0 0 24px color-mix(in srgb, ${mood.glow.primary} 45%, transparent)`,
                  }
                : undefined
            }
          >
            <span aria-hidden>{mood.emoji}</span>
            {mood.label}
          </button>
        );
      })}
    </div>
  );
}