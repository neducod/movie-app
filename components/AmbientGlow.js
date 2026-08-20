export function AmbientGlow({ mood }) {
  const primary = mood?.glow.primary ?? "#e50914";
  const secondary = mood?.glow.secondary ?? "#141414";
  const animation = mood?.glow.animation ?? "pulse";

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-bg">
      <div
        className="absolute -top-[20%] left-1/2 w-[1200px] h-[1200px] rounded-full -translate-x-1/2 blur-[120px] opacity-35 transition-[background] duration-700 ease-netflix"
        style={{
          background: `radial-gradient(circle, ${primary} 0%, ${secondary} 55%, transparent 75%)`,
          animation: `${animationName(animation)} ${animationDuration(animation)} ease-in-out infinite`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0)_0%,rgba(20,20,20,0.6)_55%,rgba(20,20,20,1)_100%)]" />
      <style>{keyframes}</style>
    </div>
  );
}

function animationName(animation) {
  switch (animation) {
    case "flicker": return "glow-flicker";
    case "pulse": return "glow-pulse";
    case "drift": return "glow-drift";
    case "burst": return "glow-burst";
    default: return "glow-pulse";
  }
}

function animationDuration(animation) {
  switch (animation) {
    case "flicker": return "2.4s";
    case "pulse": return "5s";
    case "drift": return "9s";
    case "burst": return "3.2s";
    default: return "5s";
  }
}

const keyframes = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes glow-flicker {
    0%, 100% { opacity: 0.28; transform: translateX(-50%) scale(1); }
    20% { opacity: 0.42; transform: translateX(-50%) scale(1.02); }
    35% { opacity: 0.22; transform: translateX(-50%) scale(0.99); }
    60% { opacity: 0.4; transform: translateX(-50%) scale(1.01); }
    80% { opacity: 0.25; transform: translateX(-50%) scale(1); }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
    50% { opacity: 0.48; transform: translateX(-50%) scale(1.06); }
  }
  @keyframes glow-drift {
    0% { opacity: 0.25; transform: translateX(-55%) translateY(0) scale(1); }
    50% { opacity: 0.38; transform: translateX(-45%) translateY(30px) scale(1.08); }
    100% { opacity: 0.25; transform: translateX(-55%) translateY(0) scale(1); }
  }
  @keyframes glow-burst {
    0% { opacity: 0.25; transform: translateX(-50%) scale(0.95); }
    30% { opacity: 0.55; transform: translateX(-50%) scale(1.15); }
    100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
  }
}
@media (prefers-reduced-motion: reduce) {
  [class*="glow-"] { animation: none !important; }
}
`;