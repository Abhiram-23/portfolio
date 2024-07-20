import React from "react";
import "./AboutMe.css";
import { Divider } from "@mui/material";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme-heading-container">
        <h1 className="aboutme-heading">AboutMe</h1>
        <h4 className="aboutme-subheading">Why Choose Me?</h4>
      </div>
      <div className="aboutme-card">
        <div className="aboutme-img-container">
          <img
            className="aboutme-img"
            src={require("../../Assets/Abhi.jpg")}
            alt="Abhiram"
          />
        </div>
        <div className="aboutme-description-container">
          <p className="aboutme-description">
            Welcome to my portfolio! I'm Abhiram Paidimarri, a passionate and
            driven software engineer currently pursuing a Master of Science in
            Informatics at the University of Louisiana at Lafayette, USA. My
            academic journey began with a Bachelor of Technology in Electronics
            & Computer Engineering from JB Institute of Engineering and
            Technology in Hyderabad, India. My professional experience includes
            working as a Software Development Engineer (SDE1) at Valuebound
            Consulting Services Pvt. Ltd in India. During my tenure, I was
            instrumental in implementing an ERP system that significantly
            enhanced internal process efficiency and cross-team communication. I
            also played a key role in integrating Dialpad, Twilio, and SalesLoft
            with the MindTickle Call AI Platform, which led to notable
            improvements in data-driven insights and operational efficiency for
            our clients. Before my role as an SDE1, I started as a Software
            Trainee at Valuebound, where I gained substantial expertise in
            developing enterprise resource planning portals using cutting-edge
            technologies. I am passionate about leveraging technology to solve
            real-world problems and continuously seek opportunities to learn and
            grow in the dynamic field of software engineering. My journey is
            driven by a commitment to excellence and a desire to make a
            meaningful impact through innovative solutions. Feel free to reach
            out to me via email at abhiram.paidimarri1@louisiana.edu or connect
            with me on LinkedIn. You can also find my coding profiles on
            Leetcode and Hacker Rank. Thank you for visiting my portfolio, and I
            look forward to connecting with you!
          </p>
          <div className="profile-options">
            <a href="Abhiram_Resume.pdf" download="Abhiram_Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default AboutMe;
