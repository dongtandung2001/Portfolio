import React from "react";
import { FiCalendar, FiMapPin, FiBook } from "react-icons/fi";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Software Engineering",
      institution: "San Jose State University",
      location: "San Jose, CA",
      duration: "2024 - 2026",
      gpa: "3.4/4.0",
      relevantCourses: [
        "Enterprise Distributed Systems",
        "Enterprise Application Development",
        "Enterprise Software Platforms",
        "Software Systems Engineering",
        "Data Mining",
        "Virtualization Technologies",
        "Software Security Technologies",
      ],
      project: {
        title: "AI Documentation Agent",
        description: "An AI-powered agent specialized in automatically generating comprehensive documentation for any codebase, leveraging advanced code analysis and natural language processing techniques.",
        status: "In Progress"
      },
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "San Jose State University",
      location: "San Jose, CA",
      duration: "2021 - 2024",
      gpa: "3.7/4.0",
      relevantCourses: [
        "Software Engineering",
        "Data Structures and Algorithms",
        "Introduction to the Design and Analysis of Algorithms",
        "Database Management Systems",
        "NoSQL Database Systems",
        "Computer Networks",
        "Operating Systems",
      ],
      achievements: [
        "Magna Cum Laude",
        "SJSU President's Scholar",
        "Dean's List",
      ],
    },
  ];

  return (
    <div id="education" className="py-24 bg-white dark:bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-dark-100 mb-6">Education</h2>
          <p className="text-gray-600 dark:text-dark-200 text-lg max-w-3xl mx-auto mt-10">
            My academic background and qualifications.
          </p>
        </div>

        <div className="space-y-10">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-dark-400 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-500 dark:border-primary-400 animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-500 dark:text-dark-200">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center">
                        <FiBook className="mr-2" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {edu.relevantCourses && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-dark-100 mb-3">
                      Relevant Coursework
                    </h4>
                    <ul className="space-y-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-dark-200 flex items-start"
                        >
                          <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-dark-100 mb-3">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-dark-200 flex items-start"
                        >
                          <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {edu.project && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-500">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-dark-100 mb-3">
                    Master's Project
                  </h4>
                  <div className="bg-gray-50 dark:bg-dark-500 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="font-medium text-gray-800 dark:text-dark-100">
                        {edu.project.title}
                      </h5>
                      {edu.project.status && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          {edu.project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-dark-200">
                      {edu.project.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
