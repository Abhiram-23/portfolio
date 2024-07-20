import React from "react";
import "./Projects.css";
import Box from "@mui/material/Box";

const Projects = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <ul>
        <div className="project-list">
          <div>
            <li className="project-name">
              Valuebound-Enterprise Resource Planning
              <span className="tech-stack">
                <a
                  href="https://drive.google.com/file/d/19nhf46zcr9QPQzQZFc9pCiloD6QgEar5/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Link
                </a>
              </span>
            </li>
            <p>
              • Implemented the PMO section of the company ERP, enabling
              management to view detailed reports for over 200 employees.
            </p>
            <p>
              • Enhanced project analytics, allowing management to track the
              number of employees per project and the percentage of resources
              allocated, improving oversight efficiency by 25%.
            </p>
            <p>
              <span className="tech-used">Technologies used: </span>
              <span className="tech-stack">
                React, NodeJS, ExpressJS, Material UI, MongoDB
              </span>
            </p>
          </div>
          <div>
            <h6 className="project-year">Dec 2022 – July 2023</h6>
          </div>
        </div>
        <div className="project-list">
          <div>
            <li className="project-name">Dialer Integration</li>
            <p>
              • Integrated Dialpad, Twilio, and SalesLoft with the MindTickle
              Call-AI Platform using OAuth 2.0, and access tokens, facilitating
              secure data capture.
            </p>
            <p>
              • Implemented webhooks and cron jobs to capture and process user
              call data, managing over 1000’s of recordings stored in AWS S3.
            </p>
            <p>
              • Stored structured data in SQL databases, enabling efficient
              analytics and operational insights for client operations.
            </p>
            <p>
              <span className="tech-used">Technologies used: </span>
              <span className="tech-stack">
                Python, Sanic, Gino, AWS, PostgreSQL
              </span>
            </p>
          </div>
          <div>
            <h6 className="project-year">JAN 2022 – Nov 2022</h6>
          </div>
        </div>
      </ul>
    </Box>
  );
};

export default Projects;
