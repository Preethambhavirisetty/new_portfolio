import { forwardRef } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../constants";

const ICONS = {
  Email: (
    <path
      d="M3 5h18v14H3zM3 5l9 7 9-7"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Phone: (
    <path
      d="M5 4h4l1.5 5L8 11a11 11 0 0 0 5 5l2-2.5 5 1.5v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  LinkedIn: (
    <path
      d="M4 4h16v16H4zM8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  GitHub: (
    <path
      d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3-1.07-3-1.07-.4-1.04-1-1.3-1-1.3-.8-.56.06-.55.06-.55.9.06 1.37.93 1.37.93.8 1.37 2.1.97 2.6.74.08-.58.3-.97.55-1.2-2-.22-4.1-1-4.1-4.43 0-.98.35-1.78.92-2.4-.1-.23-.4-1.15.1-2.4 0 0 .76-.24 2.5.93a8.6 8.6 0 0 1 4.55 0c1.74-1.17 2.5-.93 2.5-.93.5 1.25.2 2.17.1 2.4.57.62.92 1.42.92 2.4 0 3.44-2.1 4.2-4.1 4.42.32.28.6.82.6 1.65v2.45c0 .23.15.51.6.43A9 9 0 0 0 12 3z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
    />
  ),
};

const LINKS = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  {
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "LinkedIn", value: "preetham10022001", href: contactInfo.linkedin },
  { label: "GitHub", value: "Preethambhavirisetty", href: contactInfo.github },
];

const Contact = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section grid-texture relative flex w-full flex-col items-center justify-center overflow-hidden bg-cream px-6 sm:px-12"
    >
      <div
        aria-hidden
        className="gradient-blob gradient-blob-a left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 bg-gradient-to-b from-sunset/30 to-transparent"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-b -bottom-24 -right-20 h-[22rem] w-[22rem] bg-gradient-to-tl from-deep/25 to-sunset/15"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-c -bottom-16 -left-16 h-72 w-72 bg-gradient-to-tr from-sunset/15 to-deep/20 opacity-70"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center"
      >
        <p className="font-mono text-sm text-sunset">
          <span className="text-deep/40">$</span> contact --open
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-deep sm:text-6xl">
          Let&apos;s build
          <span className="bg-gradient-to-r from-sunset to-deep bg-clip-text text-transparent">
            {" "}
            something
          </span>
        </h2>

        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-deep/10 bg-deep/[0.03] p-5 text-left backdrop-blur-sm transition-colors hover:border-sunset/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-deep/15 text-deep transition-colors group-hover:border-sunset group-hover:text-sunset">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  {ICONS[item.label]}
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-deep/40">
                  {item.label}
                </p>
                <p className="mt-1 break-all font-body text-deep">{item.value}</p>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
