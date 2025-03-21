import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className="transition-colors duration-300">
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Achievement />
        <Education />
        <Project />
        <Skill />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;
