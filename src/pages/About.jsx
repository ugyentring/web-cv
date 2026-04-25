import React from "react";
import {
  GraduationCap,
  School,
  BookOpen,
  Sparkles,
  Code2,
  ShieldCheck,
  Layers,
} from "lucide-react";

const education = [
  {
    level: "Tertiary Education",
    school: "Gyalpozhing College of Information Technology",
    year: "2022 — 2026",
    description:
      "Specialized in Computer Science and Cybersecurity. Built projects across web development, blockchain, and penetration testing.",
    Icon: GraduationCap,
  },
  {
    level: "Secondary Education",
    school: "Kamji Central School",
    year: "2016 — 2019",
    description:
      "Focused on Science and Mathematics, developing analytical and problem-solving skills.",
    Icon: School,
  },
  {
    level: "Primary Education",
    school: "Kezari Primary School",
    year: "2009 — 2015",
    description:
      "Built a strong foundation in essential subjects and learning habits.",
    Icon: BookOpen,
  },
];

const principles = [
  {
    Icon: Code2,
    title: "Engineering",
    desc: "Clean architecture, readable code, and pragmatic full-stack solutions.",
  },
  {
    Icon: ShieldCheck,
    title: "Security",
    desc: "Threat-aware development with a focus on penetration testing.",
  },
  {
    Icon: Layers,
    title: "Craft",
    desc: "Considered details, refined typography, and minimal interfaces.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-24 sm:py-28 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
            About
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          {/* Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              A developer who values
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                clarity, security, and craft.
              </span>
            </h2>
          </div>

          {/* Body */}
          <div className="lg:col-span-7 space-y-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed text-pretty">
            <p>
              I&apos;m a Computer Science graduate from Gyalpozhing College of
              Information Technology, focused on building secure and efficient
              web solutions. My work spans frontend and backend engineering,
              blockchain applications, and offensive security.
            </p>
            <p>
              Across academic and personal projects, I&apos;ve combined modern
              technologies with security-first thinking — gaining hands-on
              experience in full-stack development, decentralized applications,
              and penetration testing.
            </p>

            {/* Principles */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {principles.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 transition-colors hover:border-neutral-900 dark:hover:border-neutral-100"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className="text-neutral-900 dark:text-neutral-100 mb-3"
                  />
                  <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-3">
              <Sparkles size={14} strokeWidth={1.75} />
              <span className="text-xs uppercase tracking-[0.25em] font-medium">
                Education
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-balance">
              A foundation built over fifteen years.
            </h3>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              From early curiosity to a focused study of computer science and
              cybersecurity.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative border-l border-neutral-200 dark:border-neutral-800">
              {education.map(({ level, school, year, description, Icon }) => (
                <li key={level} className="relative pl-8 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                  </span>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                      <Icon size={16} strokeWidth={1.75} />
                      <span className="text-sm font-semibold tracking-tight">
                        {level}
                      </span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                      {year}
                    </span>
                  </div>
                  <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                    {school}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
