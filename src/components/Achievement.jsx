import React from "react";
import {
  FiAward,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiExternalLink,
} from "react-icons/fi";

const Achievement = () => {
  const achievements = [
    {
      id: 1,
      title: "One Trillion Agents Hackathon",
      event: "NEAR Protocol's Global AI & Web3 Hackathon",
      subtitle: "2nd Place - Aurora AI Agentic Chains",
      date: "March 2025",
      location: "Online",
      teamSize: 4,
      participants: 2056,
      description:
        "Developed HedgeFi, an AI-powered Web3 platform on NEAR & Aurora for meme coin trading and creation. The platform leverages AI agents to streamline market interactions, token launches, and betting.\n\n" +
        "Competed against professional software engineers and developers from around the world in this high-profile Web3 hackathon with over 2,000 participants.",
      technologies: [
        "Next.js",
        "Aurora Chain",
        "ElizaOS",
        "Solidity",
        "Hardhat",
        "OpenAI",
        "Python",
        "Pinata",
        "NebulaBlock",
      ],
      projectLink: "https://devpost.com/software/hedgefi",
      hackathonLink: "https://1t-agents.devpost.com/",
    },
  ];

  return (
    <div id="achievements" className="py-24 bg-gray-50 dark:bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-dark-100 mb-6">
            Achievements
          </h2>
          <p className="text-gray-600 mt-10 dark:text-dark-200 text-lg max-w-3xl mx-auto">
            Recognition and awards from hackathons and coding competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white dark:bg-dark-400 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary-500 dark:border-primary-400 animate-fade-in"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-primary-50 dark:bg-dark-300 rounded-full mr-4">
                  <FiAward className="text-primary-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100 inline-flex items-center">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 text-white px-3 py-1 rounded-md mr-2 shadow-sm">
                      Winner
                    </span>
                    <span>{achievement.title}</span>
                  </h3>
                  {achievement.subtitle && (
                    <p className="text-amber-500 dark:text-yellow-400 text-sm font-semibold mt-3 inline-block py-0.5 px-2 bg-amber-50 dark:bg-yellow-900/30 rounded-md border border-amber-200 dark:border-yellow-700">
                      {achievement.subtitle}
                    </p>
                  )}
                  <p className="text-primary-600 dark:text-primary-400 font-medium mt-2">
                    {achievement.event}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600 dark:text-dark-200">
                <div className="flex items-center">
                  <FiCalendar className="mr-2 text-gray-400" />
                  <span>{achievement.date}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-2 text-gray-400" />
                  <span>{achievement.location}</span>
                </div>
                <div className="flex items-center">
                  <FiUsers className="mr-2 text-gray-400" />
                  <span>Team of {achievement.teamSize}</span>
                </div>
                {achievement.participants && (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>
                      {achievement.participants.toLocaleString()} Participants
                    </span>
                  </div>
                )}
                {achievement.projectLink && (
                  <div className="flex items-center">
                    <FiExternalLink className="mr-2 text-gray-400" />
                    <a
                      href={achievement.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline"
                    >
                      Project Link
                    </a>
                  </div>
                )}
                {achievement.hackathonLink && (
                  <div className="flex items-center">
                    <FiExternalLink className="mr-2 text-gray-400" />
                    <a
                      href={achievement.hackathonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline"
                    >
                      Hackathon Link
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-4 text-gray-600 dark:text-dark-200">
                {achievement.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {achievement.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-500 text-gray-700 dark:text-dark-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
