import { PROVIDERS } from "@/data/providers";

export function StreamingBadges({ providerIds, movieTitle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {providerIds.map((id) => {
        const provider = PROVIDERS[id];
        if (!provider) return null;
        return (
          
            key={id}
            href={`${provider.watchUrlBase}${encodeURIComponent(movieTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Watch "${movieTitle}" on ${provider.name}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-chip font-body font-semibold text-xs text-white transition-transform duration-150 ease-netflix hover:scale-105"
            style={{ backgroundColor: provider.color }}
          >
            {provider.logoInitial && <span aria-hidden>{provider.logoInitial}</span>}
            {provider.name}
          </a>
        );
      })}
    </div>
  );
}