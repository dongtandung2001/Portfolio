import React from "react";
import Avatar from "../assets/avatar.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 bg-white dark:bg-dark-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-sm md:text-base font-medium text-primary-600 dark:text-primary-400 mb-3">
              Hello, my name is
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-dark-100 mb-4">
              Dung Dong
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-dark-200 mb-6">
              Full-stack Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-dark-200 max-w-md mb-8 text-lg">
              I build intelligent applications powered by AI agents, focusing on
              creating autonomous and adaptive software solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/dongtandung2001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-400 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/danieldong2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-400 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="p-3 bg-white dark:bg-dark-400 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <HiOutlineMail size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth duration={500}>
                <button className="primary-button flex items-center gap-2">
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 border-2 border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 font-medium rounded-md hover:bg-primary-500/10 transition-all duration-300">
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary-500/20 dark:bg-primary-400/20 rounded-full animate-pulse"></div>
              <img
                src={Avatar}
                alt="my profile"
                className="relative z-10 rounded-full w-64 md:w-80 border-4 border-white dark:border-dark-400 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
