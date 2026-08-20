import { MoodChips } from "./MoodChips";
import { IntensitySlider } from "./IntensitySlider";
import { EndingSelector } from "./EndingSelector";

export function VibeEngine({ query, onMoodChange, onIntensityChange, onEndingChange, onSubmit }) {
  return (
    <section id="engine" className="flex flex-col gap-8 px-[4vw] py-12 max-w-[1100px] mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl md:text-5xl text-textPrimary tracking-wide leading-[1.05]">
          What's the vibe tonight?
        </h1>
        <p className="font-body text-base text-textMuted">
          Three inputs. Zero scrolling through rows you've already seen.
        </p>
      </div>

      <Field label="Current mood" step="01">
        <MoodChips selected={query.mood} onSelect={onMoodChange} />
      </Field>

      <Field label="Pacing" step="02">
        <IntensitySlider value={query.intensity} onChange={onIntensityChange} />
      </Field>

      <Field label="Preferred ending" step="03">
        <EndingSelector selected={query.ending} onSelect={onEndingChange} />
      </Field>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!query.mood}
        className="self-start inline-flex items-center justify-center gap-2 font-body font-bold rounded px-9 py-4 text-base bg-crimson text-white cursor-pointer transition-all duration-300 ease-netflix hover:bg-crimsonGlow hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Find My Movie
      </button>
    </section>
  );
}

function Field({ label, step, children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-crimson font-bold">{step}</span>
        <span className="font-body text-sm font-bold text-textPrimary uppercase tracking-widest">{label}</span>
      </div>
      {children}
    </div>
  );
}