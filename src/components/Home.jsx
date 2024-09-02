import React from "react";
import Avatar from "../assets/avatar.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Full-stack Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            "You miss 100% of the shots you don't take" - Gretzky
          </p>

          <div>
            <Link to="projects" smooth duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Avatar}
            alt="my profile"
            className="mx-auto rounded-2xl w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
