import React from "react";
import { Award, ArrowUpRight, FileText, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Foundations of User Experience (UX) Design",
    provider: "Google",
    year: "2023",
    desc: "Learned the basics of UX — how to design with the user in mind, and why accessibility matters.",
    file: "/certificates/ux.pdf",
    verify: "https://coursera.org/share/1ead753320d825f511532e6129b004e8",
  },
  {
    title: "Foundations of Cybersecurity",
    provider: "Google",
    year: "2023",
    desc: "An intro to cybersecurity — what a security analyst does, common threats, and how teams stay safe online.",
    file: "/certificates/cyber.pdf",
    verify:
      "https://www.coursera.org/account/accomplishments/verify/QSDBFFVABUN8",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    provider: "Google",
    year: "2023",
    desc: "Covered how to spot risks and weaknesses in a business, and how to plan for them before they happen.",
    file: "/certificates/security.pdf",
    verify: "https://coursera.org/share/baf167899414752f0a223ea36e0f17b2",
  },
  {
    title: "CCNA: Introduction to Networks",
    provider: "Cisco Networking Academy",
    year: "2025",
    desc: "The basics of networking — IP addresses, routing, switching, and how to troubleshoot a small network.",
    file: null,
    verify: "https://www.netacad.com/",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative px-6 py-24 sm:py-28 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 font-medium">
            Credentials
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Certifications
              <span className="block text-neutral-400 dark:text-neutral-600 font-light">
                Things I&apos;ve learned along the way.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
              Courses I&apos;ve completed in cybersecurity, networking, and UX
              design. You can open each certificate or check it online.
            </p>
          </div>
        </div>

        {/* Cert grid */}
        <div className="grid md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
          {certifications.map((cert, idx) => (
            <article
              key={cert.title}
              className="group relative bg-white dark:bg-neutral-950 p-7 sm:p-8 flex flex-col transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1">
                  <Award
                    size={14}
                    strokeWidth={1.75}
                    className="text-neutral-900 dark:text-neutral-100"
                  />
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {cert.provider}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                    {cert.year}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 dark:text-neutral-700">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Title + desc */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-neutral-900 dark:text-neutral-100 text-balance">
                  {cert.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">
                  {cert.desc}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-7 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
                {cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 text-xs font-medium transition-all hover:bg-neutral-800 dark:hover:bg-white hover:gap-3"
                  >
                    <FileText size={14} strokeWidth={1.75} />
                    See certificate
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 dark:text-neutral-600">
                    <FileText size={14} strokeWidth={1.75} />
                    Coming soon
                  </span>
                )}
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="group/verify inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  <BadgeCheck size={14} strokeWidth={1.75} />
                  Check online
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.75}
                    className="transition-transform group-hover/verify:-translate-y-0.5 group-hover/verify:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
