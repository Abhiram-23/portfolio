import React from "react";
import "./WorkExperience.css";
import Box from "@mui/material/Box";

const WorkExperience = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <ul className="work-list">
        <div>
          <li className="comp-name">
            Valuebound Consulting Services Pvt. Ltd, India
          </li>
          <p className="comp-name">Software Developer I</p>
          <p>
            • Implemented the PMO section of the company ERP, improving
            management's reporting and project tracking for over 200 employees
            using React, NodeJS, ExpressJS, Material UI, and MongoDB.
          </p>
          <p>
            • Led Dialer’s Integration with the MindTickle Platform. Utilized
            OAuth 2.0, webhooks, and cron jobs to process call data, managing
            thousands of recordings in AWS S3 and enabling efficient analytics
            with SQL databases using Python, AWS, and PostgreSQL.
          </p>
        </div>
        <div>
          <h6 className="exp-year">Sep 2021 – July 2023</h6>
        </div>
      </ul>
    </Box>
  );
};

export default WorkExperience;
