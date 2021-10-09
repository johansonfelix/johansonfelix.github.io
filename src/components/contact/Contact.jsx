import "./contact.scss";
import { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <h1>Let's Connect.</h1>
      <p className="text">
        I am currently looking for new opportunities. My inbox is always open.
        Whether you have a question or just want to say hi, or want to schedule
        a coffee, I’ll try my best to get back to you!
      </p>
      <div className="buttons">
        <EmailIcon className="button" />
        <GitHubIcon className="button" />
        <LinkedInIcon className="button" />
      </div>
      <a className="resumeButton button" href=" ">
              Resume
            </a>

      <p className="footer">Built by Johanson Felix</p>
      <a className="arrow up" href="#intro">
        <KeyboardArrowUpIcon />
      </a>
    </div>
  );
};

export default Contact;
