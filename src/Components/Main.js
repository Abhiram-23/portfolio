import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import MainResume from "./Resume/MainResume";
import ContactMe from "./ContactMe/ContactMe";
import MobilePopup from "./MobilePopup/MobilePopup";
const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile && <MobilePopup />}
      <Navigation />
      <div className="sections">
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="about" className="section">
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
