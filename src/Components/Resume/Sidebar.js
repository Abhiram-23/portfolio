import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-scroll";
import "./Sidebar.css";

const Sidebar = ({ onSelect, selectedSection }) => {
  return (
    <div className="sidebar">
      <List>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <ListItem
            button
            onClick={() => onSelect("education")}
            className={selectedSection === "education" ? "selected" : ""}
          >
            <ListItemIcon>
              <SchoolIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <ListItem
            button
            onClick={() => onSelect("experience")}
            className={selectedSection === "experience" ? "selected" : ""}
          >
            <ListItemIcon>
              <WorkIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Work Experience" />
          </ListItem>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500} offset={-70}>
          <ListItem
            button
            onClick={() => onSelect("skills")}
            className={selectedSection === "skills" ? "selected" : ""}
          >
            <ListItemIcon>
              <CodeIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Programming Skills" />
          </ListItem>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <ListItem
            button
            onClick={() => onSelect("projects")}
            className={selectedSection === "projects" ? "selected" : ""}
          >
            <ListItemIcon>
              <AssessmentIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link
          to="interests"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        ></Link>
      </List>
    </div>
  );
};

export default Sidebar;
