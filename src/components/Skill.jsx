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
import docker from "../assets/docker.png"

const Skill = () => {
  const skills = [
    {
      header: "Programming Languages",
      skills: [
        {
          id: 1,
          src: java,
          title: "Java",
          style: "shadow-red-400",
        },
        {
          id: 2,
          src: python,
          title: "Python",
          style: "shadow-blue-400",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 5,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
      ],
    },
    {
      header: "Tech Stacks",
      skills: [
        {
          id: 6,
          src: reactPic,
          title: "React.Js",
          style: "shadow-blue-600",
        },
        {
          id: 7,
          src: express,
          title: "Express.Js",
          style: "shadow-sky-800",
        },
        {
          id: 8,
          src: nodejs,
          title: "Node.Js",
          style: "shadow-green-400",
        },
        {
          id: 16,
          src: django,
          title: "Django",
          style: "shadow-green-800",
        },

        {
          id: 9,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 10,
          src: bootstrap,
          title: "Bootstrap5",
          style: "shadow-purple-800",
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
          style: "shadow-gray-400",
        },
        {
          id: 16,
          src: docker,
          title: "Docker",
          style: "shadow-sky-800",
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
          style: "shadow-orange-400",
        },

      ],
    },

    {
      header: "Database",
      skills: [
        {
          id: 14,
          src: mysql,
          title: "MySQL",
          style: "shadow-blue-400",
        },
        {
          id: 15,
          src: mongodb,
          title: "MongoDB",
          style: "shadow-green-400",
        },
      ],
    },
  ];
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="font-bold text-4xl border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
        </div>
        {skills.map(({ header, skills }) => (
          <div>
            <p className="py-6">{header}</p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {skills.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} className="w-20 mx-auto" alt="" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
