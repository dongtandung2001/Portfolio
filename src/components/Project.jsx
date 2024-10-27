import React from "react";
import sql4u from "../assets/portfolio/sql4u.png";
import restaurantFinder from "../assets/portfolio/restaurant.webp";

import storeapi from "../assets/portfolio/storeapi.png";
import discord from "../assets/portfolio/discordbot.webp";
import discordGpt from "../assets/portfolio/gpt.webp";
import healthWatch from "../assets/portfolio/health.png";

const Project = () => {
  const projects = [
    {
      id: 4,
      src: healthWatch, // You'll need to import the image
      code: "your-github-link",
      demo: "your-demo-link",
      title: "Health Guardian",
      description:
        "An advanced IoT healthcare solution delivering real-time monitoring of vital signs like heart rate and blood pressure. Leveraging a robust data pipeline powered by MQTT, Kafka, and Spark, it streams and analyzes continuous health data to identify potential heart failure risks.",
      tech: "IoT, MQTT, Kafka, Spark",
    },
    {
      id: 1,
      src: sql4u,
      code: "https://github.com/dongtandung2001/SQL4U",
      demo: "https://www.sql4u.dev/",
      title: "SQL4U",
      description:
        "A MERN stack application helping users learn SQL through interactive exercises and real-time feedback. Features user authentication, progress tracking, and a comprehensive SQL tutorial system.",
      tech: "MERN Stack",
    },
    {
      id: 3,
      src: discordGpt,
      code: "https://github.com/dongtandung2001/aio-discord-bot",
      demo: "https://github.com/dongtandung2001/aio-discord-bot/",
      title: "AIO Discord Bot",
      description:
        "An AI-powered Discord bot leveraging OpenAI's GPT for natural conversations and Q&A. Features include OCR for image-to-text conversion, contextual memory for continuous conversations, moderation tools, and utility commands. Supports both casual chat and technical assistance.",
      tech: "Discord.py, OpenAI API",
    },
    {
      id: 2,
      src: discord,
      demo: "https://github.com/SCE-Development/SCE-discord-bot",
      code: "https://github.com/SCE-Development/SCE-discord-bot",
      title: "Discord Music Bot",
      description:
        "A feature-rich Discord bot that plays music from various sources, manages queues, and provides audio controls for server members.",
      tech: "Discord.js",
    },
    {
      id: 5,
      src: restaurantFinder, // You'll need to import the image
      code: "your-github-link",
      demo: "your-demo-link",
      title: "Restaurant Finder - Modern Restaurant Discovery Platform",
      description:
        "A full-stack restaurant discovery platform inspired by Yelp, built with Next.js and Go. Features include user authentication via next-auth, interactive map integration, advanced restaurant search with filters, user reviews and ratings, and restaurant owner dashboard. Deployed on AWS for scalability and reliability.",
      tech: "Next.js, Go, MongoDB, AWS",
    },
    {
      id: 6,
      src: storeapi,
      code: "https://github.com/dongtandung2001/Store-API",
      demo: "https://github.com/dongtandung2001/Store-API",
      title: "Store API",
      description:
        "Full-featured e-commerce API with product management, user authentication, and order processing.",
      tech: "Django, MySQL",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 pb-2">
            Projects
          </h2>
          <p className="mt-6 flex items-center gap-2">
            Check out some of my work. More on my
            <a
              href="https://github.com/dongtandung2001"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Github
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, src, code, demo, title, description, tech }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800 rounded-full">
                    {tech}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {description}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a href={demo} target="_blank" className="flex-1">
                    <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Demo
                    </button>
                  </a>
                  <a href={code} target="_blank" className="flex-1">
                    <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
