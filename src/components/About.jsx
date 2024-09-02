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
        <p className=" text-lg mt-10 ">
          I'm a passionate Software Engineer with a Bachelor's degree in
          Computer Science and currently pursuing a Master's degree in Software
          Engineering at San Jose State University. My technical expertise lies
          in a variety of programming languages, frameworks, and tools,
          including:
        </p>
        <li className=" text-lg mt-5 italic">
          Programming Languages: TypeScript, Python, JavaScript, Java.
        </li>
        <li className=" text-lg mt-5 italic">
          Frameworks: React.js, Vue.js, Astro.js.
        </li>
        <li className=" text-lg mt-5 italic">Databases: SQL, MongoDB.</li>
        <li className=" text-lg mt-5 italic">Cloud Platforms: AWS, GCP.</li>

        <br />
        <p className="text-lg">
          I'm driven by a desire to create innovative and efficient software
          solutions. I'm constantly learning and adapting to new technologies to
          stay at the forefront of the industry. My skills and experience allow
          me to contribute effectively to various software development projects.
        </p>
        <br />
        <p className="text-lg ">
          I'm eager to apply my knowledge and skills to exciting new projects
          and contribute to the success of a dynamic team.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
