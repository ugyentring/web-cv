import React from "react";
import { Trophy, Code2 } from "lucide-react";

const projects = [
  {
    title: "Blockchain-Based Voting System",
    tagline: "Ethereum · Solidity · Hardhat",
    desc: "Built a decentralized voting system where users can securely cast votes on the Ethereum testnet. The system uses smart contracts to record votes transparently and prevent duplicate voting.",
    tech: ["React", "Node.js", "Express", "Solidity", "Hardhat", "Ethereum"],
    year: "2025",
  },
  {
    title: "Land Registry System",
    tagline: "Hyperledger Fabric · Blockchain",
    desc: "Developed a blockchain-based land registry system using Hyperledger Fabric to securely manage land ownership records, transfer history, and verification of land documents.",
    tech: [
      "Hyperledger Fabric",
      "Node.js",
      "Express",
      "Blockchain",
      "Smart Contract",
    ],
    year: "2025",
  },
  {
    title: "Blockchain Social Media Application",
    tagline: "Ethereum · Decentralized App",
    desc: "Built a decentralized social media application where users can create posts, interact with content, and store key actions through Ethereum smart contracts for transparency and ownership.",
    tech: ["React", "Solidity", "Hardhat", "Ethereum", "Web3.js", "Node.js"],
    year: "2025",
  },
  {
    title: "Supply Chain Tracker",
    tagline: "Ethereum · Supply Chain",
    desc: "Created a blockchain-based supply chain tracking system that records product movement, ownership changes, and verification checkpoints on Ethereum for better transparency and traceability.",
    tech: ["React", "Solidity", "Hardhat", "Ethereum", "Node.js", "Express"],
    year: "2025",
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
              Projects &amp; Work
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                A few things I&apos;ve built.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
              A selection of development projects and IT work — full-stack web
              apps, database-driven systems, and hands-on network and server
              setup that I&apos;ve designed, built, and maintained.
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
                      <Code2
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
      </div>
    </section>
  );
};

export default Projects;
