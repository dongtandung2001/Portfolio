import React from "react";
import {
  FiUser,
  FiCode,
  FiDatabase,
  FiCloud,
  FiGitBranch,
} from "react-icons/fi";

const About = () => {
  const infoCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode className="text-primary-500 text-xl" />,
      items: ["TypeScript", "Python", "JavaScript", "Java"],
    },
    {
      title: "Frameworks",
      icon: <FiCode className="text-primary-500 text-xl" />,
      items: ["React.js", "Vue.js", "Astro.js", "Next.js", "Express.js"],
    },
    {
      title: "Databases",
      icon: <FiDatabase className="text-primary-500 text-xl" />,
      items: ["SQL", "MongoDB"],
    },
    {
      title: "Cloud Platforms",
      icon: <FiCloud className="text-primary-500 text-xl" />,
      items: ["AWS", "GCP"],
    },
    {
      title: "DevOps",
      icon: <FiGitBranch className="text-primary-500 text-xl" />,
      items: ["Docker", "Github"],
    },
  ];

  return (
    <div id="about" className="py-24 bg-gray-50 dark:bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-dark-100 mb-6">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FiUser className="text-primary-500 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-100">
                  Dung (Daniel) Dong
                </h3>
              </div>
              <div className="bg-white dark:bg-dark-400 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 dark:text-dark-200 mb-4">
                  I'm a passionate Software Engineer with a Bachelor's degree in
                  Computer Science and currently pursuing a Master's degree in
                  Software Engineering at San Jose State University.
                </p>
                <p className="text-gray-700 dark:text-dark-200 mb-4">
                  I'm driven by a desire to create innovative and efficient
                  software solutions. I'm constantly learning and adapting to
                  new technologies to stay at the forefront of the industry. My
                  skills and experience allow me to contribute effectively to
                  various software development projects.
                </p>
                <p className="text-gray-700 dark:text-dark-200">
                  I'm eager to apply my knowledge and skills to exciting new
                  projects and contribute to the success of a dynamic team.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100 mb-6">
                Technical Expertise
              </h3>
              <div className="space-y-4">
                {infoCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-dark-400 rounded-xl p-5 shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {category.icon}
                      <h4 className="font-bold text-gray-800 dark:text-dark-100">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-500 text-gray-700 dark:text-dark-200 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
