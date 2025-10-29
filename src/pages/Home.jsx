import React from "react";
import myPic from "../assets/mypic.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* Avatar */}
      <img
        src={myPic}
        alt="avatar"
        className="w-44 h-44 rounded-full border-4 border-green-700 dark:border-green-400 object-cover mb-4"
      />

      {/* Name */}
      <h1 className="text-5xl font-bold text-green-700 dark:text-green-400 mb-1">
        Ugay
      </h1>

      {/* Role */}
      <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
        Software Developer
      </p>

      {/* Description */}
      <p className="max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
        I build secure, modern, and high-performance web applications. I
        specialize in frontend & backend development and penetration testing.
      </p>
    </section>
  );
};

export default Home;
