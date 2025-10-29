import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import resume from "../assets/My_Resume.pdf";

const ResumeDownloadButton = () => {
  return (
    <a
      href={resume}
      download
      className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition"
    >
      <Download size={18} />
      <span>Download CV</span>
    </a>
  );
};

export default ResumeDownloadButton;
