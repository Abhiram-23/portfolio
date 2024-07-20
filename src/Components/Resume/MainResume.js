import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Resume from "./Resume";

import "./MainResume.css";

const MainResume = () => {
  const [selectedSection, setSelectedSection] = useState("education");

  return (
    <div className="main-resume">
      <div className="aboutme-heading-container">
        <h1 className="aboutme-heading">Resume</h1>
        <h4 className="aboutme-subheading">My formal Bio Details</h4>
      </div>
      <div className="sidebar_resume">
        <Sidebar onSelect={setSelectedSection} />
        <Resume section={selectedSection} />
      </div>
    </div>
  );
};

export default MainResume;
