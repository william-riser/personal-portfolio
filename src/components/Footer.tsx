// src/components/Footer.tsx
import React from "react";
import githubwhite from "/public/images/githubwhite.png";
import instagramlogo from "/public/images/instagramlogo.png";
import linkedin from "/public/images/linkedin.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-white p-4 text-center absolute w-full max-h-6em">
      <section className="flex justify-center space-x-4">
        <a
          className="link"
          href="https://www.linkedin.com/in/william-riser-b3bb82295/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
        </a>
        <a
          href="https://www.instagram.com/william.riser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramlogo} alt="Instagram" style={{ width: "24px", height: "24px" }} />
        </a>
        <a href="https://github.com/william-riser" target="_blank" rel="noopener noreferrer">
          <img src={githubwhite} alt="GitHub" style={{ width: "24px", height: "24px" }} />
        </a>
      </section>
      <p className="text-center">
        &copy; 2024 William Riser. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
