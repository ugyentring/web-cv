import React from "react";
import myPic from "../assets/mypic.jpg";
import resume from "../assets/My_Resume.pdf";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Name, Role, Description, Buttons */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-green-700 dark:text-green-400">
            Ugay
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">
            Software Developer & Cybersecurity Analyst
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            I build secure, modern, and high-performance web applications. I
            specialize in frontend & backend development and penetration
            testing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 justify-center md:justify-start">
            {/* Download CV */}
            <a
              href={resume}
              download
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition transform hover:scale-105"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start mt-2 sm:mt-0">
              <a
                href="mailto:tsheringugyen483@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/ugyentring?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ugyen-tshering-939521328/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={myPic}
              alt="avatar"
              className="w-64 h-80 md:w-72 md:h-96 rounded-2xl object-cover shadow-2xl transition-transform transform hover:scale-105"
            />
            {/* Optional subtle faded border effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-200 dark:border-green-700 opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
