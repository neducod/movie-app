import { formatRuntime } from "../lib/matching";
import { StreamingBadges } from "./StreamingBadges";

export function MovieCard({ recommendation }) {
  const { movie, matchPercentage } = recommendation;

  return (
    <article className="flex-none w-[78vw] sm:w-[320px] rounded-card overflow-hidden bg-bgCard border border-border transition-all duration-300 ease-netflix hover:scale-105 hover:border-borderStrong hover:shadow-2xl">
      <div
        className="relative h-[180px] flex items-end p-4"
        style={{
          background: `linear-gradient(135deg, ${movie.posterGradient[0]}, ${movie.posterGradient[1]})`,
        }}
      >
        <span className="absolute top-3 right-3 font-mono text-xs font-bold text-white bg-black/55 px-2.5 py-1 rounded-chip border border-white/20">
          {matchPercentage}% Mood Match
        </span>
        <h3 className="font-display text-lg text-white tracking-wide [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
          {movie.title}
        </h3>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
          <span>{movie.year}</span>
          <Dot />
          <span>{formatRuntime(movie.runtimeMinutes)}</span>
          <Dot />
          <span className="border border-borderStrong px-1.5 rounded-[2px]">{movie.rating}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {movie.genres.map((genre) => (
            <span key={genre} className="font-body text-xs text-textMuted bg-white/[0.06] px-2 py-0.5 rounded-chip">
              {genre}
            </span>
          ))}
        </div>

        <p className="font-body text-sm text-textPrimary leading-relaxed">{movie.hook}</p>

        <StreamingBadges providerIds={movie.providers} movieTitle={movie.title} />
      </div>
    </article>
  );
}

function Dot() {
  return <span className="w-[3px] h-[3px] rounded-full bg-textFaint" />;
}