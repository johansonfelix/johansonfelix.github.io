import "./intro.scss";
import { useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ParticlesBg from "particles-bg";

const Intro = () => {
  const textRef = useRef();
  /*  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: "|",
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer.", "UI Designer.", "Content Creator."],
    });
  }, []); */

  return (

      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img className="blob" src="assets/blob.svg" alt="" />
            <img className="coverPicture" src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi, my name is</h2>
            <span>
              <h1 className="name">Johanson Felix.</h1>
            </span>
            <h1 className="desc">I build things for the web.</h1>

            <p className="introduction">
              I am a Full Stack Engineer based in Montréal specializing in web
              services and applications. Currently, I am looking for
              opportunities that foster creativity, collaboration and
              innovation. Let's connect !
            </p>

            <div className="buttons">
             <a href="mailto:felix.johanson@gmail.com"><EmailIcon className="button" /> </a>
             <a href="https://github.com/johansonfelix" target="_blank" rel="noreferrer"> <GitHubIcon className="button" /> </a>
              <a href="https://www.linkedin.com/in/johanson-felix-336a94186" target="_blank" rel="noreferrer"> <LinkedInIcon className="button" /></a>
            </div>
            <a className="resumeButton button" href="https://drive.google.com/file/d/1q4fQxpoLT-fAwp_zgEfbElbLzc2pXrNx/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
         
        </div>
        <ParticlesBg
       
          type="cobweb"
          color="#1b998b"
          bg={{
            position: "absolute",
            zIndex: -1,
            width: "100vw",
            opacity: "0.5"
          }}
        />
         <a className="arrow" href="#about">
            <KeyboardArrowDownIcon />
          </a>
      </div>

  );
};

export default Intro;
