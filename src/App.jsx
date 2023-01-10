import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skill />

      <SocialLinks />
    </div>
  );
}

export default App;
