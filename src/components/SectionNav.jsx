const SectionNav = ({ sections, activeIndex, onNavigate }) => {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-4 sm:right-8"
    >
      {sections.map((label, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={label}
            aria-label={`Go to ${label}`}
            onClick={() => onNavigate(index)}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-opacity ${
                isActive ? "opacity-100 text-deep" : "opacity-0 group-hover:opacity-60 text-deep"
              }`}
            >
              {label}
            </span>
            <span
              className={`font-mono text-[11px] transition-colors ${
                isActive ? "text-sunset" : "text-deep/30 group-hover:text-deep/60"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;
