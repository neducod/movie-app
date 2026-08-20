import { ENDING_PREFERENCES } from "../data/moods";

export function EndingSelector({ selected, onSelect }) {
  return (
    <div role="radiogroup" aria-label="Preferred ending" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {ENDING_PREFERENCES.map((ending) => {
        const isActive = selected === ending.id;
        return (
          <button
            key={ending.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onSelect(ending.id)}
            className={`flex flex-col gap-1.5 px-5 py-4 rounded-card border cursor-pointer text-left transition-all duration-300 ease-netflix hover:scale-[1.03] ${
              isActive
                ? "border-crimson bg-crimson/10 shadow-[0_0_0_1px_#e50914,0_0_30px_rgba(229,9,20,0.25)]"
                : "border-border bg-bgCard hover:border-borderStrong hover:bg-bgCardHover"
            }`}
          >
            <span className="text-xl" aria-hidden>{ending.icon}</span>
            <span className="font-body font-bold text-sm text-textPrimary">{ending.label}</span>
            <span className="font-body text-xs text-textFaint">{ending.description}</span>
          </button>
        );
      })}
    </div>
  );
}