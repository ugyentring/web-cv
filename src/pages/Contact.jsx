import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Intro */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Have a project in mind or want to collaborate? I’m open to freelance
            work, pentration testing of your website, or just a friendly chat about tech.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Let’s build something impactful together — you can reach me anytime
            via email or social platforms.
          </p>
        </div>

        {/* Right: Contact Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition hover:scale-[1.02]">
          {/* Contact Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Mail size={22} className="text-green-700 dark:text-green-400" />
              <a
                href="mailto:tsheringugyen483@gmail.com"
                className="hover:text-green-700 dark:hover:text-green-400 transition"
              >
                tsheringugyen483@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <Phone size={22} className="text-green-700 dark:text-green-400" />
              <span>+975 17964942</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
              <MapPin
                size={22}
                className="text-green-700 dark:text-green-400"
              />
              <span>Thimphu, Bhutan</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center mb-6">
            <a
              href="https://github.com/ugyentring"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/ugyen-tshering-939521328/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://www.facebook.com/utugg23"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
            >
              <Facebook size={26} />
            </a>
          </div>

          {/* Button */}
          <a
            href="mailto:tsheringugyen483@gmail.com"
            className="inline-flex items-center justify-center w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg transition"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
