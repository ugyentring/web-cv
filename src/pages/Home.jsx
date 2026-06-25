import React from "react";
import myPic from "../assets/mypic.jpg";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
  Code2,
  Server,
} from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-900 dark:bg-neutral-100 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100"></span>
            </span>
            Open to software developer &amp; IT officer roles
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance">
              Ugyen Tshering
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                Software Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
            I build reliable web applications and keep systems running smoothly.
            From full-stack development with React and Node.js to managing
            networks, servers, and IT support, I enjoy turning requirements into
            clean, maintainable solutions that teams can depend on.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} strokeWidth={1.75} />
              Thimphu, Bhutan
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="inline-flex items-center gap-2">
              <Code2 size={16} strokeWidth={1.75} />
              Full-Stack Development
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="inline-flex items-center gap-2">
              <Server size={16} strokeWidth={1.75} />
              IT Systems &amp; Support
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-6 py-3 text-sm font-medium transition-all hover:bg-neutral-800 dark:hover:bg-white hover:gap-3"
            >
              View my work
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-6 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-all hover:border-neutral-900 dark:hover:border-neutral-100 hover:gap-3"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-1 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 mr-3">
              Connect
            </span>
            <a
              href="https://github.com/ugyentring?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com/in/ugyen-tshering-939521328/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
            <a
              href="mailto:tsheringugyen483@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* Right: Portrait card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Decorative offset frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-20 h-20 border border-neutral-300 dark:border-neutral-700 rounded-full"
            />

            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <img
                src={myPic || "/placeholder.svg"}
                alt="Portrait of Ugyen Tshering"
                className="w-full h-[420px] sm:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Bottom info card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur border border-neutral-200 dark:border-neutral-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy
                    size={16}
                    strokeWidth={1.75}
                    className="text-neutral-900 dark:text-neutral-100"
                  />
                  <div className="leading-tight">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Recent highlight
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      CS graduate &amp; builder
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                  &apos;26
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block border-t border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-800">
          <Stat value="10+" label="Projects built" />
          <Stat value="5+" label="Tech &amp; tools" />
          <Stat value="Full" label="Stack workflow" />
          <Stat value="∞" label="Things to build" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="py-5 px-4 flex flex-col items-start">
    <span className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      {value}
    </span>
    <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mt-1">
      {label}
    </span>
  </div>
);

export default Home;
