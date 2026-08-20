import { MovieCard } from "./MovieCard";

export function MovieGrid({ title, recommendations }) {
  if (recommendations.length === 0) {
    return (
      <div className="font-body text-textFaint text-sm py-10 text-center">
        Nothing matches that combination yet — try a different mood or ending.
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-2xl tracking-wide text-textPrimary">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-thumb]:rounded-chip">
        {recommendations.map((rec) => (
          <div key={rec.movie.id} className="snap-start">
            <MovieCard recommendation={rec} />
          </div>
        ))}
      </div>
    </section>
  );
}