import React from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ugyentring",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ugyen-tshering-939521328/",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/utugg23",
    Icon: Facebook,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-neutral-200 dark:border-neutral-800">
          {/* Brand + tagline */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-3 group"
              aria-label="Back to top"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-semibold tracking-tight">
                UT
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Ugyen Tshering
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
                  Software Developer
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
              Building secure, considered web experiences from Thimphu, Bhutan.
              Available for full-stack engineering and security work.
            </p>

            {/* CTA */}
            <a
              href="mailto:tsheringugyen483@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100"
            >
              <Mail size={14} strokeWidth={1.75} />
              <span className="border-b border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-900 dark:group-hover:border-neutral-100 transition-colors pb-0.5">
                tsheringugyen483@gmail.com
              </span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium mb-5">
              Sitemap
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.75}
                      className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium mb-5">
              Elsewhere
            </p>
            <ul className="space-y-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    <Icon size={14} strokeWidth={1.75} />
                    {label}
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.75}
                      className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {year} Ugyen Tshering. Crafted with care in Thimphu, Bhutan.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              v1.0
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Back to top
              <ArrowUp
                size={12}
                strokeWidth={1.75}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
