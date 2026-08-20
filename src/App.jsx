import { useEffect, useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { AmbientGlow } from "./components/AmbientGlow";
import { VibeEngine } from "./components/VibeEngine";
import { MovieGrid } from "./components/MovieGrid";
import { MOODS } from "./data/moods";
import { MOVIES } from "./data/movies";
import { getRecommendations } from "./lib/matching";

function isMoodId(value) {
  return !!value && MOODS.some((m) => m.id === value);
}

function isEndingId(value) {
  return !!value && ["happy", "tragic", "mind-bending", "surprise"].includes(value);
}

export default function App() {
  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const moodParam = params.get("mood");
    const intensityParam = Number(params.get("intensity"));
    const endingParam = params.get("ending");
    return {
      mood: isMoodId(moodParam) ? moodParam : null,
      intensity: intensityParam >= 1 && intensityParam <= 5 ? intensityParam : 3,
      ending: isEndingId(endingParam) ? endingParam : null,
    };
  });
  const [hasSearched, setHasSearched] = useState(
    () => new URLSearchParams(window.location.search).has("mood")
  );

  // Mirror the current vibe into the URL so it's shareable / survives a refresh.
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.mood) params.set("mood", query.mood);
    params.set("intensity", String(query.intensity));
    if (query.ending) params.set("ending", query.ending);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [query]);

  const selectedMood = useMemo(() => MOODS.find((m) => m.id === query.mood) ?? null, [query.mood]);

  const recommendations = useMemo(
    () => (hasSearched ? getRecommendations(MOVIES, query) : []),
    [hasSearched, query]
  );

  return (
    <>
      <AmbientGlow mood={selectedMood} />
      <div className="relative z-10">
        <Navbar />
        <VibeEngine
          query={query}
          onMoodChange={(mood) => setQuery((q) => ({ ...q, mood }))}
          onIntensityChange={(intensity) => setQuery((q) => ({ ...q, intensity }))}
          onEndingChange={(ending) => setQuery((q) => ({ ...q, ending }))}
          onSubmit={() => setHasSearched(true)}
        />

        {hasSearched && (
          <div id="results" className="px-[4vw] pb-20 max-w-[1400px] mx-auto">
            <MovieGrid
              title={
                selectedMood
                  ? `Matched to your ${selectedMood.label.toLowerCase()} mood`
                  : "Your recommendations"
              }
              recommendations={recommendations}
            />
          </div>
        )}
      </div>
    </>
  );
}