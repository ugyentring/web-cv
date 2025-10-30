import React from "react";
import { Book, School, GraduationCap } from "lucide-react";

const education = [
  {
    level: "Primary Education",
    school: "Kezari Primary School",
    year: "2009 - 2015",
    description:
      "Built a strong foundation in basic subjects and essential skills.",
    icon: (
      <Book size={28} className="text-green-700 dark:text-green-400 mb-2" />
    ),
  },
  {
    level: "Secondary Education",
    school: "Kamji Central School",
    year: "2016 - 2019",
    description:
      "Focused on Science and Mathematics, developing analytical and problem-solving skills.",
    icon: (
      <School size={28} className="text-green-700 dark:text-green-400 mb-2" />
    ),
  },
  {
    level: "Tertiary Education",
    school: "Gyalpozhing College of Information Technology",
    year: "2022 - 2026",
    description:
      "Specialized in Computer Science and Cybersecurity, completing projects in web development, blockchain, and penetration testing.",
    icon: (
      <GraduationCap
        size={28}
        className="text-green-700 dark:text-green-400 mb-2"
      />
    ),
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#4ade80_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* About Me */}
      <div className="relative max-w-4xl mx-auto text-center mb-20 backdrop-blur-md bg-white/10 dark:bg-gray-800/20 p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-6">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I am a Computer Science graduate of Gyalpozhing College of Information
          Technology, experienced in building secure and efficient web
          solutions. I have worked on frontend and backend development,
          blockchain projects, and cybersecurity, with a focus on penetration
          testing.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Throughout my studies, I completed several projects integrating modern
          technologies and security best practices, gaining hands-on experience
          in full-stack development and decentralized applications.
        </p>
      </div>

      {/* Education */}
      <div className="relative max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-10 text-center">
          Education
        </h3>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl 
                         hover:bg-green-50/60 dark:hover:bg-gray-700/40 text-center duration-300"
            >
              <div className="flex flex-col items-center">
                {edu.icon}
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {edu.level}
                </h4>
                <p className="text-green-700 dark:text-green-400 font-medium mb-1">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic mb-2">
                  {edu.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
