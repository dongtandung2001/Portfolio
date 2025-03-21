import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";
import rockliffeLogo from "../assets/portfolio/rockliffe-clean.svg"; // Updated to use the cleaner version
import sjsuLogo from "../assets/portfolio/SCE.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Rockliffe Systems",
      location: "Remote",
      duration: "June 2024 - August 2024",
      logo: rockliffeLogo,
      description: [
        "Modernized technology stack for Mailsite website to enable faster site response, better user experience, reduction of maintenance, and future growth",
        "Leveraged Astro.js for static site generation, resulting in 40% faster load times",
        "Designed and implemented RESTful APIs to handle services and database operations",
        "Architected and developed a new frontend using Vue.js, Tailwind and TypeScript, improving user experience",
        "Migrated complex business logic from C# to TypeScript, maintaining functionality while improving code maintainability",
      ],
      technologies: ["Astro.js", "Vue.js", "TypeScript", "Tailwind", "SQL"],
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "SJSU Software and Computer Engineering Society",
      location: "San Jose, CA, USA",
      duration: "May 2023 - August 2023",
      logo: sjsuLogo, // No logo available, will use default briefcase icon
      description: [
        "Created a music streaming discord bot for a school discord server with Discord.js and the ytdl-core Node.js library",
        "Implemented commands to control the bot which included song search, pausing and managing a queue of songs",
        "Integrated useful metrics to monitor the bot's performance with Prometheus, built monitoring dashboards with Grafana",
        "Enabled searching for songs by using the play-dl Node.js library, returned the top 5 results for the user to select from",
        "Oversaw and executed updates to the discord bot using Docker, Docker Compose via SSH",
      ],
      technologies: [
        "Node.js",
        "Discord.js",
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
          <h2 className="section-title dark:text-white mb-6">
            Professional Experience
          </h2>
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
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {job.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                            <div className="p-2 rounded-md flex items-center justify-center w-16 h-12">
                              {job.logo ? (
                                <img
                                  src={job.logo}
                                  alt={`${job.company} Logo`}
                                  className="w-12 h-9 object-contain"
                                />
                              ) : (
                                <FiBriefcase className="text-primary-500 text-2xl" />
                              )}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium self-center text-md">
                              {job.company}
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
