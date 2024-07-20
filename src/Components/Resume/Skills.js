// src/Skills.js
import React, { useState, useEffect } from "react";
import "./Skills.css";

const skillsData = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "SQL", level: 75 },
  { name: "GIT", level: 70 },
  { name: "Docker", level: 65 },
  { name: "React Native", level: 80 },
  { name: "Node JS", level: 75 },
  { name: "Core Java", level: 85 },
  { name: "CSS", level: 70 },
  { name: "React JS", level: 90 },
  { name: "Express JS", level: 80 },
  { name: "Mongo DB", level: 75 },
  { name: "HTML", level: 85 },
];

const getStars = (level) => {
  const fullStars = Math.floor(level / 20);
  const halfStar = level % 20 >= 10 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return { fullStars, halfStar, emptyStars };
};

const Skills = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className="skills">
      <h2>Programming Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="stars-container">
              {[...Array(getStars(skill.level).fullStars)].map((_, i) => (
                <span key={i} className={`star ${animation ? "animate" : ""}`}>
                  &#9733;
                </span>
              ))}
              {getStars(skill.level).halfStar === 1 && (
                <span className={`star half ${animation ? "animate" : ""}`}>
                  &#9733;
                </span>
              )}
              {[...Array(getStars(skill.level).emptyStars)].map((_, i) => (
                <span key={i} className="star">
                  &#9734;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
