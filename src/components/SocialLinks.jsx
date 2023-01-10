import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      link: (
        <>
          <span className="hidden lg:flex">LinkedIn </span>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/danieldong2001",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: (
        <>
          <span className="hidden lg:flex">Github </span>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/dongtandung2001",
    },
    {
      id: 3,
      link: (
        <>
          <span className="hidden lg:flex">Email </span>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:dongtandung2001@gmail.com",
    },
    {
      id: 4,
      link: (
        <>
          <span className="hidden lg:flex">Resume </span>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 flex lg:bg-none  lg:top-[35%] lg:left-0 lg:fixed justify-center ">
      <ul className="flex flex-row lg:flex-col w-full">
        {links.map(({ id, link, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-full lg:w-40 h-14 px-4 hover:scale-110 lg:px-6 lg:ml-[-100px] bg-gray-500 lg:hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              target="_blank"
              download={download}
              rel="noreferrer"
            >
              <>{link}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
