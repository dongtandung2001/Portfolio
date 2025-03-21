import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactPic from "../assets/react.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import aws from "../assets/aws.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import heroku from "../assets/heroku.png";
import bootstrap from "../assets/bootstrap.png";
import django from "../assets/django.png";
import netlify from "../assets/netlify.png";
import docker from "../assets/docker.png";
import vue from "../assets/vue.png";
import astro from "../assets/astro.png";
import gcp from "../assets/gcp.png";
import typescript from "../assets/ts.png";
import nextjs from "../assets/nextjs.png";

const Skill = () => {
  const skillCategories = [
    {
      header: "Programming Languages",
      skills: [
        {
          id: 2,
          src: python,
          title: "Python",
          style: "border-blue-400 bg-blue-50 dark:bg-dark-400/50",
        },
        {
          id: 21,
          src: typescript,
          title: "TypeScript",
          style: "border-blue-500 bg-blue-50 dark:bg-dark-400/50",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "border-yellow-500 bg-yellow-50 dark:bg-dark-400/50",
        },
        {
          id: 1,
          src: java,
          title: "Java",
          style: "border-red-400 bg-red-50 dark:bg-dark-400/50",
        },
        {
          id: 4,
          src: html,
          title: "HTML",
          style: "border-orange-500 bg-orange-50 dark:bg-dark-400/50",
        },
        {
          id: 5,
          src: css,
          title: "CSS",
          style: "border-blue-500 bg-blue-50 dark:bg-dark-400/50",
        },
      ],
    },
    {
      header: "Tech Stacks",
      skills: [
        {
          id: 6,
          src: reactPic,
          title: "React.js",
          style: "border-blue-600 bg-blue-50 dark:bg-dark-400/50",
        },
        {
          id: 18,
          src: vue,
          title: "Vue.js",
          style: "border-green-500 bg-green-50 dark:bg-dark-400/50",
        },
        {
          id: 19,
          src: nextjs,
          title: "Next.js",
          style: "border-gray-700 bg-gray-50 dark:bg-dark-400/50",
        },
        {
          id: 7,
          src: express,
          title: "Express.js",
          style: "border-sky-800 bg-sky-50 dark:bg-dark-400/50",
        },
        {
          id: 8,
          src: nodejs,
          title: "Node.js",
          style: "border-green-400 bg-green-50 dark:bg-dark-400/50",
        },
        {
          id: 19,
          src: astro,
          title: "Astro.js",
          style: "border-purple-500 bg-purple-50 dark:bg-dark-400/50",
        },
        {
          id: 16,
          src: django,
          title: "Django",
          style: "border-green-800 bg-green-50 dark:bg-dark-400/50",
        },
        {
          id: 9,
          src: tailwind,
          title: "Tailwind",
          style: "border-sky-400 bg-sky-50 dark:bg-dark-400/50",
        },
        {
          id: 10,
          src: bootstrap,
          title: "Bootstrap5",
          style: "border-purple-800 bg-purple-50 dark:bg-dark-400/50",
        },
      ],
    },
    {
      header: "DevOps",
      skills: [
        {
          id: 11,
          src: github,
          title: "GitHub",
          style: "border-gray-400 bg-gray-50 dark:bg-dark-400/50",
        },
        {
          id: 17,
          src: docker,
          title: "Docker",
          style: "border-sky-800 bg-sky-50 dark:bg-dark-400/50",
        },
      ],
    },
    {
      header: "Cloud",
      skills: [
        {
          id: 12,
          src: aws,
          title: "AWS",
          style: "border-orange-400 bg-orange-50 dark:bg-dark-400/50",
        },
        {
          id: 20,
          src: gcp,
          title: "Google Cloud Platform",
          style: "border-sky-500 bg-sky-50 dark:bg-dark-400/50",
        },
      ],
    },
    {
      header: "Databases",
      skills: [
        {
          id: 14,
          src: mysql,
          title: "MySQL",
          style: "border-blue-400 bg-blue-50 dark:bg-dark-400/50",
        },
        {
          id: 15,
          src: mongodb,
          title: "MongoDB",
          style: "border-green-400 bg-green-50 dark:bg-dark-400/50",
        },
      ],
    },
  ];

  return (
    <div id="skills" className="py-24 bg-white dark:bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-dark-100 mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-600 mt-10 dark:text-dark-200 text-lg max-w-3xl mx-auto">
            My technical expertise spans across multiple programming languages,
            frameworks, and tools.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map(({ header, skills }, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-100 mb-8 pb-2 border-b border-gray-200 dark:border-dark-400">
                {header}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`border rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-dark-700/10 hover:scale-105 transition-all duration-300 bg-white dark:bg-dark-400 ${style}`}
                  >
                    <div className="p-4 flex flex-col items-center">
                      <div className="h-16 w-16 flex items-center justify-center mb-4">
                        <img
                          src={src}
                          alt={title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h4 className="font-medium text-gray-800 dark:text-dark-100 text-center">
                        {title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
