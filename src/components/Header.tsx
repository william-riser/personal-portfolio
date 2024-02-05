import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setIsScrolled(prevScrollPos < currentScrollPos && currentScrollPos > 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 opacity-0" : "bg-gray-800 opacity-100"
      }`}
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white">William Riser</h1>
        <nav>
          <ul className="text-white flex space-x-4">
            <li className="hover:bg-blue-500 rounded-sm px-2 py-1">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-blue-500 rounded-sm px-2 py-1">
              <a href="#">About</a>
            </li>
            <li className="hover:bg-blue-500 rounded-sm px-2 py-1">
              <a href="#">Projects</a>
            </li>
            <li className="hover:bg-blue-500 rounded-sm px-2 py-1">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
