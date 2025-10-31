import React from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Foundations of User Experience (UX) Design",
    provider: "Google",
    year: "2023",
    desc: "Understand foundational concepts in UX design, such as user-centered design, the design process, accessibility, and equity-focused design. ",
    file: "/public/certificates/ux.pdf",
    verify: "https://coursera.org/share/1ead753320d825f511532e6129b004e8",
  },
  {
    title: "Foundations of Cybersecurity",
    provider: "Google",
    year: "2023",
    desc: "Recognize core skills and knowledge needed to become a cybersecurity analyst",
    file: "/public/certificates/cyber.pdf",
    verify:
      "https://www.coursera.org/account/accomplishments/verify/QSDBFFVABUN8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    provider: "Google",
    year: "2023",
    desc: "Identify the primary threats, risks, and vulnerabilities to business operations",
    file: "/public/certificates/security.pdf",
    verify: "https://coursera.org/share/baf167899414752f0a223ea36e0f17b2",
  },
  {
    title: "CCNA: Introduction to Networks",
    provider: "Cisco Networking Academy",
    year: "2025",
    desc: "Learned core networking concepts, IP addressing, routing, switching, and network troubleshooting.",
    file: "../assets/ccna.pdf",
    verify: "https://www.netacad.com/",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-3">
          Certifications
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my verified online certifications in cybersecurity,
          networking, and full-stack development.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 text-green-700 dark:text-green-400">
                <Award size={20} />
                <span className="font-semibold">{cert.provider}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                {cert.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {cert.desc}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-between items-center">
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                <ExternalLink size={16} />
                View Certificate
              </a>

              <a
                href={cert.verify}
                target="_blank"
                rel="noreferrer"
                className="text-green-700 dark:text-green-400 hover:underline text-sm font-medium"
              >
                Verify Online
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
