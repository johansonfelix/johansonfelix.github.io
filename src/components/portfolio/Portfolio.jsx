import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import ProjectDialog from "./projectDialog/ProjectDialog";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  featuredPortfolio,
  javaPortfolio,
  javaScriptPortfolio,
  othersPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({})

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "java",
      title: "Java",
    },
    {
      id: "javaScript",
      title: "JavaScript",
    },
    
    {
      id: "others",
      title: "Others",
    },
    
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = (data) => {
    setSelected(data)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    switch (selected) {
      case "featured": {
        setData(featuredPortfolio);
        break;
      }
      case "java": {
        setData(javaPortfolio);
        break;
      }
      case "javascript": {
        setData(javaScriptPortfolio);
        break;
      }
      case "others": {
        setData(othersPortfolio);
        break;
      }
      /*  case "branding": {
        setData(brandingPortfolio);
        break;
      } */
     
      default:
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Some things I've Built</h1>
     {/*  <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
          />
        ))}
      </ul> */}

      <div className="container">
        {data.map((data) => (
          <div className="item" key={data.id} >
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
            <div className="buttonContainer">
            <a className="button" href={data.git} title="Github" target="_blank" rel="noreferrer"> <GitHubIcon/> </a>
            {data.demo &&
            <a className="button" href={data.demo} title="Live Demo" target="_blank" rel="noreferrer"> <OpenInNewIcon/> </a>
}
            </div>
          </div>
        ))}
      </div>
      <ProjectDialog handleClose={handleClose} setOpen={setOpen}  open={open}  data={selectedData}/>
      <a className="arrow" href="#contact">
            <KeyboardArrowDownIcon />
          </a>
    </div>
  );
};

export default Portfolio;
