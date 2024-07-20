import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import MainResume from "./Resume/MainResume";
import ContactMe from "./ContactMe/ContactMe";

import React from "react";
import { Element } from "react-scroll";

const Main = () => {
  return (
    <div>
      <Navigation />
      <div className="sections">
        <Element name="home" className="section">
          {/* <h1>Home Section</h1> */}
          <Home />
        </Element>
        <Element name="about" className="section">
          {/* <h1>About Me Section</h1> */}
          <AboutMe />
        </Element>
        <Element name="resume" className="section">
          <MainResume />
        </Element>
        <Element name="contact" className="section">
          <ContactMe />
        </Element>
      </div>
    </div>
  );
};

export default Main;
