import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-7xl font-bold inline border-b-4">
            Dung (Daniel) Dong
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a Computer Science student at San Jose State University
          passionate about software engineering
        </p>
        <br />
        <p className="text-xl">
          Through a lot of projects and a Hackathon, I have developed my problem
          solving, time management, and teamwork along with techincal skills.
        </p>
        <br />
        <p className="text-xl">
          Beyond the classroom, I like to challenge myself and learn with
          personal projects and involving myself in student organizations.
        </p>
        <br />
        <p className="text-xl">
          I'm currently in the dev team in SCE, Software Computer and
          Engineering Society, at my school. It's primary focus is to aid
          students by offering workshops, study groups, info sessions, and
          social events
        </p>
      </div>
    </div>
  );
};

export default About;
