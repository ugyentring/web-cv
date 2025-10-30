import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 transition-colors border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
            Contact Me
          </h3>
          <div className="flex flex-col space-y-2">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Mail size={18} />
              <a
                href="mailto:tsheringugyen483@gmail.com"
                className="hover:text-green-600 dark:hover:text-green-400 transition"
              >
                tsheringugyen483@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={18} />
              <span>+975 17964942</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin size={18} />
              <span>Thimphu, Bhutan</span>
            </p>
          </div>
        </div>

        {/* Center: Socials */}
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/ugyentring"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 dark:hover:text-green-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ugyen-tshering-939521328/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 dark:hover:text-green-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 dark:hover:text-green-400 transition"
          >
            <Facebook size={22} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ugay — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
