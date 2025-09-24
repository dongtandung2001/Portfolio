import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 5,
      link: "achievements",
    },
    {
      id: 4,
      link: "education",
    },
    {
      id: 6,
      link: "projects",
    },
    {
      id: 7,
      link: "skills",
    },
  ];

  return (
    <div
      className={`fixed w-full z-20 px-4 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/90 dark:bg-dark-600/90 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-signature dark:text-white text-black">
            <Link to="home" smooth duration={500} className="cursor-pointer">
              Dung
            </Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-2">
            {links.map(({ id, link }) => (
              <li key={id} className="nav-link">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="text-primary-500 dark:text-primary-400"
                  className="block py-2 transition-colors cursor-pointer"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-700" />
            )}
          </button>

          <button
            onClick={() => setNav(!nav)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-dark-600 pt-24">
          <ul className="h-full flex flex-col items-center justify-center gap-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-2xl text-gray-700 dark:text-dark-100 capitalize"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="text-primary-500 dark:text-primary-400"
                  className="transition-colors cursor-pointer"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
