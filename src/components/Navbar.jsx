export function Navbar() {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between px-[4vw] py-4 backdrop-blur-xl backdrop-saturate-150 bg-[rgba(20,20,20,0.55)] border-b border-border">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl tracking-wide text-crimson">VIBE</span>
          <span className="hidden sm:inline font-body text-xs text-textFaint">
            an engine for finding what to watch
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 font-body text-sm text-textMuted">
          <a href="#engine" className="hover:text-textPrimary transition-colors">Vibe Engine</a>
          <a href="#results" className="hover:text-textPrimary transition-colors">Recommendations</a>
        </nav>
      </header>
    );
  }