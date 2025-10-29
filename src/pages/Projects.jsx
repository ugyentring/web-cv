import React from "react";

const projects = [
  {
    title: "Land Registry System (Blockchain)",
    desc: "A decentralized platform that securely stores and verifies land ownership records using smart contracts, reducing fraud and improving transparency.",
    tech: ["Solidity", "Ethereum", "React", "Node.js", "IPFS", "Metamask"],
    link: "#",
  },
  {
    title: "Blockchain Voting System",
    desc: "An immutable voting platform that uses blockchain to record votes securely and transparently, preventing tampering or duplicate voting.",
    tech: ["Solidity", "Hardhat", "React", "Express", "Web3.js"],
    link: "#",
  },
  {
    title: "Social Media DApp",
    desc: "A decentralized social media app where users can post, like, and connect using blockchain-based authentication integrated with Metamask.",
    tech: ["Next.js", "TailwindCSS", "Solidity", "Metamask", "MongoDB"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="text-green-700 dark:text-green-400 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
