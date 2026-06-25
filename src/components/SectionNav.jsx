/* eslint-disable react/prop-types */

const SectionNav = ({ sections, activeIndex, onNavigate }) => {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-3 sm:right-5"
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
              className={`hidden border border-black bg-[#f2f1ee] px-2 py-1 font-mono text-[10px] uppercase transition-opacity sm:block ${
                isActive ? "opacity-100 text-black" : "opacity-0 text-black group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
            <span
              className={`flex h-8 w-8 items-center justify-center border border-black font-mono text-[10px] transition-colors ${
                isActive ? "bg-black text-[#f2f1ee]" : "bg-[#f2f1ee] text-black group-hover:bg-black group-hover:text-[#f2f1ee]"
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
