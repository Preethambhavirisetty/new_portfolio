import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { theme, cn } from "../theme";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? cn(theme.backgrounds.navbar, theme.shadows.sm, theme.borders.default, "border-b") : theme.backgrounds.navbar
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className={cn(theme.textColors.primary, theme.fontSizes.navLogo, theme.fontWeights.semibold, "cursor-pointer tracking-wide leading-relaxed")}>
            Tejaswi Raavi
          </p>
        </Link>

        <ul className={cn("list-none hidden sm:flex flex-row", theme.gaps.lg)}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black-100 border-b-2 border-black-100" : "text-black-100/80"
              } hover:text-black-100 pb-1", theme.fontSizes.nav, theme.fontWeights.medium, "cursor-pointer transition-all duration-300 border-b-2 border-transparent`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "flex-col",
              theme.padding.cardLg,
              theme.backgrounds.navbar,
              theme.borders.strong,
              theme.shadows.card,
              "absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            <ul className={cn("list-none flex flex-col items-start flex-1", theme.gaps.xs)}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={cn(
                    theme.fontWeights.medium,
                    "cursor-pointer",
                    theme.fontSizes.body,
                    active === nav.title ? cn(theme.textColors.primary, "underline") : theme.textColors.primary
                  )}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;