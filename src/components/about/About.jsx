import "./about.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>

      <div className="container">
        <div className="left">
          <p className="text1">
            I'm passionate about building web solutions that improve the lives
            of those around me.
          </p>
          <p className="text2">
            My interest in Software/Web Development started when I was a curious
            teenager, wanting to be a scientist - to solve real world
            problems. My speciality is in building enterprise-level APIs using
            the REST architecture. In my downtime I enjoy music, catching up on
            my favorite Netflix drama series, meditating and trying new cuisine.
          </p>
          <div className="education">
            <h2>Education</h2>
            <p>
              <strong>
                Bachelor of Computer Science - Web Services & Applications
              </strong>
              <br />
              Fall 2021 <br />
              Concordia University
            </p>
          </div>
          <div className="technologies">
            <p>Here are a few technologies I’ve been working with recently:</p> 
              <i className="devicon-java-plain"></i>
              <i className="devicon-spring-plain"></i>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-nextjs-original"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-python-plain"></i>
              <i className="devicon-flask-original"></i>
              <i className="devicon-django-plain"></i>
              <i className="devicon-cplusplus-plain"></i>
              <i className="devicon-mysql-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-figma-plain"></i>
              <i className="devicon-photoshop-plain"></i>
              <i className="devicon-illustrator-plain"></i>


           
          </div>
        </div>

        <div className="right">
          <img src="assets/johanson2.png" alt="" />
        </div>
      </div>
      <a className="arrow" href="#portfolio">
            <KeyboardArrowDownIcon />
          </a>
    </div>
  );
}
