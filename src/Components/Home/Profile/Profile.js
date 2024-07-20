import React from "react";
import "./Profile.css";
import leetcode from "../../../Assets/leetcode.png";
import hackerrank from "../../../Assets/hackerrank.png";
import git from "../../../Assets/git.png";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a
                className="icons"
                href="https://www.linkedin.com/in/abhirampaidimarri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                className="icons"
                href="https://github.com/Abhiram-23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={git} alt="git" />
              </a>
              <a
                className="icons"
                href="https://leetcode.com/abhiram_paidimarri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={leetcode} alt="Leetcode" />
              </a>
              <a
                className="icons"
                href="https://www.hackerrank.com/profile/pabhi2000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={hackerrank} alt="Hackerrank" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello , I'm <span className="highlighted-text">Abhiram</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>Full Stack Developer 🔥 🚀</h1>
              <span className="profile-role-tagline">
                Full Stack Developer with experience in MERN, Python
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="Abhiram_Resume.pdf" download="Abhiram_Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
