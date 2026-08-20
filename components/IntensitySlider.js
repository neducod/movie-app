"use client";

import { INTENSITY_MARKS } from "@/data/moods";

export function IntensitySlider({ value, onChange }) {
  const activeMark = INTENSITY_MARKS.find((m) => m.value === value);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-baseline">
        <span className="font-body text-sm text-textMuted">Slow-burn</span>
        <span className="font-mono text-sm text-crimson font-bold tracking-wide">
          {activeMark?.label}
        </span>
        <span className="font-body text-sm text-textMuted">Pure Adrenaline</span>
      </div>

      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        aria-label="Pacing intensity"
        onChange={(e) => onChange(Number(e.target.value))}
        className="vibe-slider w-full appearance-none h-1 rounded-chip cursor-pointer"
        style={{
          background: "linear-gradient(90deg, #6c7bff 0%, #ffb347 35%, #e50914 70%, #ff2fb0 100%)",
        }}
      />
      <style>{`
        .vibe-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background-color: white;
          border: 3px solid #e50914;
          box-shadow: 0 0 12px rgba(229,9,20,0.6);
          cursor: pointer;
        }
        .vibe-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background-color: white;
          border: 3px solid #e50914;
          box-shadow: 0 0 12px rgba(229,9,20,0.6);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}