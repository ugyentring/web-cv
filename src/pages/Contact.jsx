import React from "react";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors"
    >
      <h2 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-6">
        Contact
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Feel free to reach out for collaboration or freelance work.
      </p>
      <div className="flex justify-center space-x-6">
        {/* Email */}
        <a
          href="mailto:tsheringugyen483@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
        >
          <Mail size={28} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ugyentring?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
        >
          <Github size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ugyen-tshering-939521328/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
        >
          <Linkedin size={28} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/utugg23"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
        >
          <Facebook size={28} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
