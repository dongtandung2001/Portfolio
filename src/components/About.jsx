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
          I am currently a Senior at San Jose State University majoring in
          Computer Science.
        </p>
        <br />
        <p className="text-xl">
          Through a lot of projects and a Hackathon, I have developed my problem
          solving, time management, and teamwork along with techincal skills.
        </p>
        <br />
        <p className="text-xl">
          I would love to learn about new tech stack in my freetime to cultivate
          my skillset.
        </p>
      </div>
    </div>
  );
};

export default About;
