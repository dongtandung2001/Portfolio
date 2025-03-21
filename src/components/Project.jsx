import React, { useState } from "react";
import sql4u from "../assets/portfolio/sql4u.png";
import restaurantFinder from "../assets/portfolio/restaurant.webp";
import storeapi from "../assets/portfolio/storeapi.png";
import discord from "../assets/portfolio/discordbot.webp";
import discordGpt from "../assets/portfolio/gpt.webp";
import healthWatch from "../assets/portfolio/health.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 4,
      src: healthWatch,
      code: "https://github.com/maggieqin0506/HeartAnomalyDetection",
      demo: "https://github.com/maggieqin0506/HeartAnomalyDetection",
      title: "Health Guardian",
      description:
        "An advanced IoT healthcare solution delivering real-time monitoring of vital signs like heart rate and blood pressure. Leveraging a robust data pipeline powered by MQTT, Kafka, and Spark, it streams and analyzes continuous health data to identify potential heart failure risks.\n\n" +
        "Utilized Docker Compose to orchestrate the message queue infrastructure for local development, containerizing MQTT brokers, Kafka clusters, and Spark processing nodes.",
      tech: ["IoT", "MQTT", "Kafka", "Spark", "Docker", "Docker Compose"],
    },
    {
      id: 3,
      src: discordGpt,
      code: "https://github.com/dongtandung2001/aio-discord-bot",
      demo: "https://github.com/dongtandung2001/aio-discord-bot/",
      title: "AIO Discord Bot",
      description:
        "An AI-powered Discord bot leveraging OpenAI's GPT for natural conversations and Q&A. Features include OCR for image-to-text conversion, contextual memory for continuous conversations, moderation tools, and utility commands.\n\n" +
        "Deployed via Docker containers on Google Cloud Platform with automated CI/CD pipeline using GitHub Actions for seamless updates.",
      tech: [
        "Discord.py",
        "OpenAI",
        "Python",
        "Langchain",
        "OCR",
        "Docker",
        "GCP",
        "Github Actions",
      ],
    },
    {
      id: 5,
      src: restaurantFinder,
      code: "https://github.com/gopinathsjsu/team-project-backlog-breakers",
      demo: "https://github.com/gopinathsjsu/team-project-backlog-breakers",
      title: "Restaurant Finder",
      description:
        "A full-stack restaurant discovery platform inspired by Yelp, built with Next.js and Go. Features include user authentication via next-auth, interactive map integration, advanced restaurant search with filters, user reviews and ratings, and restaurant owner dashboard.\n\n" +
        "Backend implemented as 4 microservices in Go, each running on different ports within AWS EC2 instances. The microservices architecture enabled better separation of concerns and scalability.\n\n" +
        "Deployment utilized auto scaling groups behind a load balancer, with S3 storing the compiled Go binaries that were distributed to EC2 instances via a custom Linux service.",
      tech: ["Next.js", "Go", "MongoDB", "AWS", "EC2", "S3", "Load Balancer"],
    },
    {
      id: 2,
      src: discord,
      demo: "https://github.com/SCE-Development/SCE-discord-bot",
      code: "https://github.com/SCE-Development/SCE-discord-bot",
      title: "Discord Music Bot",
      description:
        "A feature-rich Discord bot that plays music from various sources, manages queues, and provides audio controls for server members.",
      tech: ["Discord.js", "Node.js", "JavaScript"],
    },
    {
      id: 1,
      src: sql4u,
      code: "https://github.com/dongtandung2001/SQL4U",
      demo: "https://www.sql4u.dev/",
      title: "SQL4U",
      description:
        "A MERN stack application helping users learn SQL through interactive exercises and real-time feedback. Features user authentication, progress tracking, and a comprehensive SQL tutorial system.\n\n" +
        "Backend deployed on AWS Beanstalk, frontend deployed on AWS Amplify.\n\n" +
        "CI/CD pipeline implemented using AWS Pipeline for seamless updates.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AWS", "Github Actions"],
    },
    {
      id: 6,
      src: storeapi,
      code: "https://github.com/dongtandung2001/Store-API",
      demo: "https://github.com/dongtandung2001/Store-API",
      title: "Store API",
      description:
        "Full-featured e-commerce API with product management, user authentication, and order processing.",
      tech: ["Django", "MySQL", "Python", "RESTful API"],
    },
  ];

  return (
    <div id="projects" className="py-24 bg-gray-50 dark:bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-dark-100 mb-6">Projects</h2>
          <p className="mt-10 text-lg text-gray-600 dark:text-dark-200 max-w-3xl mx-auto">
            Here are some of my recent projects. Check out more on my
            <a
              href="https://github.com/dongtandung2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 dark:text-primary-400 ml-1 font-medium hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, src, code, demo, title, description, tech }) => (
            <div
              key={id}
              className="card overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                    >
                      <FiGithub className="text-white" size={18} />
                    </a>
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                    >
                      <FiExternalLink className="text-white" size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-dark-100">
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-400 text-gray-800 dark:text-dark-100 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-gray-600 dark:text-dark-200 text-sm mb-6 flex-grow">
                  {description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-3" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full px-4 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-white transition-colors duration-300">
                      View Demo
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
