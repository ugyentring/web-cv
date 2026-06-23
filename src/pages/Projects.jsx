import React from "react";
import { ArrowUpRight, Github, Trophy, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Inter-College CTF Champion",
    tagline: "Capture The Flag · Competition",
    desc: "Won a Capture The Flag competition featuring participants from three colleges as well as working industry professionals. Solved challenges across web exploitation, networking, and cryptography under time pressure.",
    tech: ["Web Exploitation", "Networking", "Cryptography", "Forensics"],
    year: "2025",
  },
  {
    title: "Web App Exploitation Lab",
    tagline: "OWASP Top 10 · DVWA",
    desc: "Practiced full web exploitation against intentionally vulnerable apps like DVWA — SQL injection, XSS, command injection, and broken authentication — then documented the impact and remediation for each finding.",
    tech: ["SQL Injection", "XSS", "OWASP Top 10", "DVWA", "Burp Suite"],
    year: "2025",
  },
  {
    title: "Network Attack Simulation",
    tagline: "MITM · Traffic Analysis",
    desc: "Built a lab to perform ARP and DNS spoofing, intercept traffic via man-in-the-middle attacks, and analyze captured packets in Wireshark to demonstrate how unencrypted traffic can be compromised.",
    tech: ["ARP Spoofing", "DNS Spoofing", "MITM", "Wireshark", "Nmap"],
    year: "2024",
  },
  {
    title: "Recon & Exploitation Workflow",
    tagline: "Nmap · Metasploit",
    desc: "End-to-end offensive workflow: host discovery and service enumeration with Nmap, vulnerability identification, then controlled exploitation and post-exploitation using Metasploit against lab targets.",
    tech: ["Nmap", "Metasploit", "Kali Linux", "Enumeration", "Post-Exploitation"],
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 sm:py-28 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
            My Work
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Engagements &amp; Labs
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                A few things I&apos;ve broken into.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
              A selection of competitions and hands-on security labs covering
              web exploitation, network attacks, reconnaissance, and
              exploitation — all performed in controlled, authorized
              environments.
            </p>
          </div>
        </div>

        {/* Projects list */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="group relative block px-6 sm:px-8 py-8 sm:py-10 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-8 items-start">
                {/* Index + year */}
                <div className="col-span-12 sm:col-span-2 flex sm:flex-col items-baseline sm:items-start justify-between sm:justify-start gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600 sm:mt-1">
                    {p.year}
                  </span>
                </div>

                {/* Title + description */}
                <div className="col-span-12 sm:col-span-10">
                  <div className="flex items-start gap-3 mb-2">
                    {idx === 0 ? (
                      <Trophy
                        size={18}
                        strokeWidth={1.75}
                        className="mt-1 text-neutral-400 dark:text-neutral-600 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                      />
                    ) : (
                      <ShieldCheck
                        size={18}
                        strokeWidth={1.75}
                        className="mt-1 text-neutral-400 dark:text-neutral-600 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-neutral-100 transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All projects link */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/ugyentring?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-all hover:border-neutral-900 dark:hover:border-neutral-100 hover:gap-3"
          >
            <Github size={16} strokeWidth={1.75} />
            See more on GitHub
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
