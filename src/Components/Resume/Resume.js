import React from "react";
import Box from "@mui/material/Box";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";

import "./Resume.css";

const Resume = ({ section }) => {
  const renderSection = () => {
    switch (section) {
      case "education":
        return <Education />;
      case "experience":
        return <WorkExperience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <Education />;
    }
  };

  return (
    <div>
      <Box className="main-box-resume">
        <TransitionGroup>
          <CSSTransition key={section} timeout={1000} classNames="fade">
            {renderSection()}
          </CSSTransition>
        </TransitionGroup>
      </Box>
    </div>
  );
};

export default Resume;
