import React from "react";
import { Code2, Server, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    Icon: Code2,
    description:
      "Building responsive, accessible web apps from front-end to back-end — clean UIs with React and reliable APIs with Node.js, delivered with maintainable code.",
    tech: ["React", "JavaScript", "Node.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Backend & Databases",
    Icon: Database,
    description:
      "Designing data models, writing efficient queries, and building server-side logic that keeps applications fast, consistent, and easy to scale.",
    tech: ["SQL", "MongoDB", "Express", "Authentication", "API Design"],
  },
  {
    title: "IT Support & Systems",
    Icon: Server,
    description:
      "Setting up and maintaining networks and servers, troubleshooting issues, and providing day-to-day technical support to keep teams productive.",
    tech: ["Networking", "Linux", "Server Setup", "Troubleshooting", "Support"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-6 py-24 sm:py-28 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
            Services
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              What I do
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                The kind of work I take on.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
              I help teams ship software and keep their systems running — from
              building full-stack web applications to managing the networks,
              servers, and support behind them. I cover the work end to end,
              from first line of code to day-to-day operations.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
          {services.map(({ title, Icon, description, tech }, idx) => (
            <article
              key={title}
              className="group relative bg-white dark:bg-neutral-950 p-7 sm:p-8 flex flex-col transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              {/* Index */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-neutral-300 dark:text-neutral-700 transition-all duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              {/* Icon */}
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                <Icon size={20} strokeWidth={1.75} />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
                {description}
              </p>

              {/* Tech */}
              <div className="mt-7 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
