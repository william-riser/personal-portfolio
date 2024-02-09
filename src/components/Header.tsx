import React, { useState } from "react";
import { Link } from "react-scroll";

interface HeaderProps {
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [isScrolled] = useState(false);

  // ... (rest of handleScroll code)

  return (
    <header
      className={`z-10 fixed top-0 left-0 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 opacity-90 shadow-md" : "bg-header opacity-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between"> 
        {/* Adjust flex options for desired logo/name placement */}
        <h1 className="text-3xl font-bold text-white">William Riser</h1> 
        <nav>
          <ul className="text-white flex space-x-4">
            {sections.map((section, index) => (
              <li key={index}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust offset for header height
                  spy={true}
                  activeClass="font-semibold underline" // Underline active link
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
