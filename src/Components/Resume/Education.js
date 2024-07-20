import React from "react";
import "./Education.css";
import Box from "@mui/material/Box";

const Education = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, width: "70vw" }}>
      <ul className="education-list">
        <div>
          <li className="univ-name">University Of Louisiana at Lafayette</li>
          <p className="degree-name">
            Masters in Informatics{" "}
            <span className="percentage">CGPA (4/4)</span>
          </p>
        </div>
        <div>
          <h6 className="grad-year">2023-2024</h6>
        </div>
      </ul>
      <ul className="education-list">
        <div>
          <li className="univ-name">
            JB Institute of Engineering and Technology
          </li>
          <p className="degree-name">
            Bachelor of Technology{" "}
            <span className="percentage">CGPA (7.61/10)</span>{" "}
          </p>
        </div>
        <div sx={{ alignItems: "center" }}>
          <h6 className="grad-year">2017-2021</h6>
        </div>
      </ul>
      <ul className="education-list">
        <div>
          <li className="univ-name">Inspire Junior College</li>
          <p className="degree-name">
            Intermediate <span className="percentage">Percentage (88/100)</span>
          </p>
        </div>
        <div>
          <h6 className="grad-year">2015-2017</h6>
        </div>
      </ul>
    </Box>
  );
};

export default Education;
