import React from "react";
import sql4u from "../assets/portfolio/sql4u.png";
import memory from "../assets/portfolio/memory.png";
import api from "../assets/portfolio/api.png";
import storeapi from "../assets/portfolio/storeapi.png";
import discord from "../assets/portfolio/discord.png";
import discordGpt from "../assets/portfolio/gpt.png";

import { Link } from "react-scroll";
import { MdKeyboardArrowRight } from "react-icons/md";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: sql4u,
      code: "https://github.com/dongtandung2001/SQL4U",
      demo: "https://www.sql4u.dev/",
      title: "MERN - SQL4U - E-learning website",
    },
    {
      id: 2,
      src: discord,
      demo: "https://github.com/SCE-Development/SCE-discord-bot",
      code: "https://github.com/SCE-Development/SCE-discord-bot",
      title: "Discord.js - Discord Music Bot",
    },
    {
      id: 3,
      src: discordGpt,
      code: "https://github.com/dongtandung2001/aio-discord-bot",
      demo: "https://github.com/dongtandung2001/aio-discord-bot/",
      title: "Discord.py - Multifunctional Discord Bot",
    },
    {
      id: 4,
      src: memory,
      demo: "https://ajar-scratch-address.glitch.me/",
      code: "https://github.com/dongtandung2001/Memory-game",
      title: "HTML, CSS, JS - Memory Game",
    },
    {
      id: 5,
      src: api,
      code: "https://github.com/dongtandung2001/Song_Searching_API",
      demo: "https://github.com/dongtandung2001/Song_Searching_API",
      title: "Flask, SQL - Song searching API",
    },
    {
      id: 6,
      src: storeapi,
      code: "https://github.com/dongtandung2001/Store-API",
      demo: "https://github.com/dongtandung2001/Store-API",
      title: "Django, MySQL- Store API",
    },
  ];
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Check some of my work here. More on my
            <a href="https://github.com/dongtandung2001">
              <button className="group text-white w-fit px-3 py-3 mx-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                Github
              </button>
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, demo, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h1 className="flex items-center justify-center text-center">
                {title}
              </h1>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-fill h-48 w-96"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    <button className="group text-white w-fit px-3 py-3 mx-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                      Demo
                    </button>
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank">
                    <button className="group text-white w-fit px-3 py-3 mx-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                      Code
                    </button>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
