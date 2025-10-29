import React from "react";
import { Code, ShieldCheck, Server, Terminal } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Code size={28} />,
    description: "Build responsive and modern user interfaces.",
    tech: ["React", "TailwindCSS", "JavaScript", "TypeScript", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: <Server size={28} />,
    description: "Develop robust server-side applications and APIs.",
    tech: ["Node.js", "Express", "MongoDB", "MySQL", "Python"],
  },
  {
    title: "Penetration Testing",
    icon: <ShieldCheck size={28} />,
    description: "Identify vulnerabilities and secure web applications.",
    tech: ["Kali Linux", "Burp Suite", "OWASP Tools", "Metasploit"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-10 text-center">
        Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition hover:scale-105"
          >
            <div className="mb-4 text-green-700 dark:text-green-400">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {service.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
