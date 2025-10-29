import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Wrench,
  Folder,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import ResumeDownloadButton from "./ResumeDownloadButton";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <Home size={18} />, href: "#home" },
    { name: "About", icon: <User size={18} />, href: "#about" },
    { name: "Services", icon: <Wrench size={18} />, href: "#services" },
    { name: "Projects", icon: <Folder size={18} />, href: "#projects" },
    { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-none transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-xl font-bold text-green-700 dark:text-green-400">
          Ugay
        </h1>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <ResumeDownloadButton />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <ResumeDownloadButton />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
