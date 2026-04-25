import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ArrowDownToLine } from "lucide-react";
import resume from "../assets/My_Resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll state for floating nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for nav highlighting
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={[
          "mx-auto flex items-center justify-between gap-4",
          "max-w-6xl rounded-full border transition-all duration-300",
          "px-3 sm:px-4 py-2",
          scrolled
            ? "border-neutral-200/80 dark:border-neutral-800/80 bg-white/75 dark:bg-neutral-950/75 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "border-transparent bg-white/40 dark:bg-neutral-950/40 backdrop-blur-md",
        ].join(" ")}
      >
        {/* Logo / Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-full"
          aria-label="Ugyen Tshering — Home"
        >
          <span className="grid place-items-center h-8 w-8 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[11px] font-semibold tracking-[0.08em] transition-transform group-hover:scale-105">
            UT
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Ugyen Tshering
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 mt-1">
              Portfolio
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-full transition-colors",
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
                  ].join(" ")}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={[
                      "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[3px] w-[3px] rounded-full transition-all duration-300",
                      isActive
                        ? "bg-neutral-900 dark:bg-neutral-100 opacity-100"
                        : "bg-transparent opacity-0",
                    ].join(" ")}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="grid place-items-center h-9 w-9 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            {darkMode ? (
              <Sun size={17} strokeWidth={1.75} />
            ) : (
              <Moon size={17} strokeWidth={1.75} />
            )}
          </button>

          {/* Resume CTA — matches Home primary CTA */}
          <a
            href={resume}
            download
            className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 pl-4 pr-4 h-9 text-sm font-medium transition-all hover:bg-neutral-800 dark:hover:bg-white"
          >
            <ArrowDownToLine
              size={15}
              strokeWidth={2}
              className="transition-transform group-hover:translate-y-0.5"
            />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden grid place-items-center h-9 w-9 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} />
            ) : (
              <Menu size={20} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          "lg:hidden mx-auto max-w-6xl overflow-hidden transition-[max-height,opacity,margin] duration-300",
          menuOpen
            ? "max-h-[calc(100vh-6rem)] opacity-100 mt-2"
            : "max-h-0 opacity-0 mt-0",
        ].join(" ")}
      >
        <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_40px_-16px_rgba(0,0,0,0.16)] p-4">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "flex items-center justify-between py-3 px-2 border-b border-neutral-100 dark:border-neutral-900 last:border-b-0 transition-colors",
                      isActive
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tabular-nums text-neutral-400 dark:text-neutral-600 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium tracking-tight">
                        {link.name}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center gap-2">
            <a
              href={resume}
              download
              onClick={() => setMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 h-10 text-sm font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-white"
            >
              <ArrowDownToLine size={15} strokeWidth={2} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
