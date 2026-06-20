import resumePdf from "../assets/PreethamBhavirisetty.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md">
      <nav className="section-container !py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 leading-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-ink/15 bg-white font-display text-sm">
            PB
          </span>
          <span>
            <span className="block text-[13px] font-semibold text-ink">Preetham</span>
            <span className="block text-[10px] text-muted -mt-0.5">builds systems</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[11px] text-ink/55">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
          <a href={resumePdf} download="Preetham_Bhavirisetty_Resume.pdf" className="hover:text-ink transition-colors">
            Resume
          </a>
        </div>

        <a href="#contact" className="rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-cream hover:shadow-modern">
          Reach out
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
