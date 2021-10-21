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
            My interest in Software/Web Development started when I was younger, wanting to be a scientist - to solve real world
            problems. My speciality is in building enterprise-level APIs using
            the REST architecture. I am highly proficient in Java, JavaScript, and Python and have a great grasp of front-end technologies with practice in UI/UX. In my downtime I enjoy music, catching up on
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
              <i title="Java" className="devicon-java-plain"></i>
              <i title="CSS3" className="devicon-css3-plain"></i>
              <i title="HTML5" className="devicon-html5-plain"></i>
              <i title="Spring Framework" className="devicon-spring-plain"></i>
              <i title="Sass" className="devicon-sass-original"></i>
              <i title="JavaScript" className="devicon-javascript-plain"></i>
              <i title="React" className="devicon-react-original"></i>
              <i title="Next.js" className="devicon-nextjs-original"></i>
              <i title="Node.js" className="devicon-nodejs-plain-wordmark"></i>
              <i title="Express.js" className="devicon-express-original"></i>
              <i title="Python" className="devicon-python-plain"></i>
              <i title="Flask" className="devicon-flask-original"></i>
              <i title="Django" className="devicon-django-plain"></i>
              <i title="C++" className="devicon-cplusplus-plain"></i>
              <i title="Mysql" className="devicon-mysql-plain"></i>
              <i title="PostgreSQL" className="devicon-postgresql-plain"></i>
              <i title="MongoDB" className="devicon-mongodb-plain"></i>
              <i title="Figma" className="devicon-figma-plain"></i>
              <i title="Adobe Photoshop" className="devicon-photoshop-plain"></i>
              <i title="Adobe Illustrator" className="devicon-illustrator-plain"></i>
           
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
