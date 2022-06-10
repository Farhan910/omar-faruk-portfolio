import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Experiances from "./Experiances";

import Projects from "./Projects";
import Skills from "./Skills";
import Some from "./Some";

const Home = () => {
  return (
    <div>
    
      <Banner />
      
      <Experiances />
      <Skills/>
      <About/>
     
      <Some/>
      <Contact/>
      
    </div>
  );
};

export default Home;
