import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";
import rockliffeLogo from "../assets/portfolio/rockliffe-clean.svg"; // Updated to use the cleaner version
import sjsuLogo from "../assets/portfolio/SCE.png";
import amazonLogo from "../assets/portfolio/amazon.webp";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "SDE Intern",
      company: "Amazon Web Services",
      location: "Santa Clara, CA, USA",
      duration: "May 2025 - August 2025",
      logo: amazonLogo,
      description: [
        "Added trust-mode to the AWS language server to improve developer flow by auto-approving shell commands with security guardrails that require explicit user approval for detected destructive/unsafe operations, resulting in 70% internal adoption across IDE plugins within 3 weeks",
        "Implemented keyboard shortcuts for agent execution controls in the Amazon Q IDE plugins to keep developers hands-on-keyboard and cut pointer use, resulting in 60% of agent actions triggered via shortcuts",
        "Enhanced automation scripts for local build generation, reducing manual setup effort by ~40% and accelerating testing cycles",
        "Inherited and extended mynah-ui's event-driven, native DOM architecture to ship a reusable dropdown form component supporting rich menu layouts and responsive styling; integrated into the Amazon Q IDE extension in VS Code, with Playwright E2E coverage",
      ],
      technologies: ["TypeScript", "VS Code Extensions", "Playwright", "mynah-ui", "Amazon Q"],
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Rockliffe Systems",
      location: "Remote",
      duration: "June 2024 - August 2024",
      logo: rockliffeLogo,
      description: [
        "Modernized stack with Astro (SSG) + Vue islands, Tailwind, TypeScript, reducing shipped JS and simplifying maintenance (clearer module boundaries, fewer ad-hoc templates)",
        "Improved median LCP by ~40% (Lighthouse) through Astro SSG, asset pruning, and CDN caching",
        "Replaced hardcoded pages with REST APIs backed by an SQL database and introduced basic caching to stabilize response times",
        "Migrated core business logic from C# to TypeScript to unify the stack and simplify maintenance, validating with parity tests",
      ],
      technologies: ["Astro.js", "Vue.js", "TypeScript", "Tailwind CSS", "SQL", "C#"],
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "SJSU Software and Computer Engineering Society",
      location: "San Jose, CA, USA",
      duration: "May 2023 - August 2023",
      logo: sjsuLogo,
      description: [
        "Built a music-streaming Discord bot (Node.js, Discord.js, ytdl-core / play-dl) with play/pause/skip/search and per-server in-memory queues to minimize latency and eliminate unnecessary infrastructure overhead",
        "Instrumented runtime metrics with Prometheus and created Grafana dashboards to monitor performance and basic health",
        "Containerized & deployed via Docker and Docker Compose over SSH, enabling straightforward updates and rollback",
      ],
      technologies: [
        "Node.js",
        "Discord.js",
        "ytdl-core",
        "play-dl",
        "Docker",
        "Prometheus",
        "Grafana",
      ],
    },
  ];

  return (
    <div id="experience" className="py-24 bg-white dark:bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-white mb-6">Experience</h2>
          <p className="text-gray-600 mt-10 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            My journey in software engineering and development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-dark-400"></div>

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <div
                key={job.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 z-10"></div>

                <div
                  className={`md:flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Date section */}
                  <div
                    className={`md:w-1/2 md:px-8 mb-6 md:mb-0 flex flex-col ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    <div className="flex items-center text-gray-500 dark:text-gray-300 mb-2">
                      <FiCalendar className="mr-2" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-300">
                      <FiMapPin className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`bg-white dark:bg-dark-400 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${
                        index % 2 === 0
                          ? "border-l-4 border-primary-500 dark:border-primary-400"
                          : "border-r-4 border-primary-500 dark:border-primary-400"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md flex items-center justify-center w-16 h-16 flex-shrink-0">
                            {job.logo ? (
                              <img
                                src={job.logo}
                                alt={`${job.company} Logo`}
                                className="max-w-12 max-h-12 w-auto h-auto object-contain"
                              />
                            ) : (
                              <FiBriefcase className="text-primary-500 text-2xl" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {job.company}
                            </h3>
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-md">
                              {job.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="mb-4 space-y-2">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-500 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
