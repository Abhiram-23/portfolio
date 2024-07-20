// import React from "react";
// import "./Navigation.css";
// const Navigation = () => {
//   return (
//     <div className="navbar">
//       <h1>Abhiram</h1>
//       <h4>Home</h4>
//       <h4>AboutMe</h4>
//       <h4>Resume</h4>
//       <h4>ContactMe</h4>
//     </div>
//   );
// };

// export default Navigation;

// src/Navbar.js

import React from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
