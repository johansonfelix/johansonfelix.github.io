import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

import "./projectDialog.scss";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialog({
  data,
  handleClickOpen,
  handleClose,
  open,
}) {
  const technologies = ["React", "Node.js", "Expressjs", "FireBase", "MongoDB"];

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ p: 0 }} className="dialog1">
          <DialogContentText id="alert-dialog-description">
            <div className="container">
              <div className="top">
                <img
                  src={data.demoImg}
                  alt=""
                />
              </div>
              <div className="bottom">
                <h2>CASE STUDY</h2>
                <h1>{data.title}</h1>
                <p className="desc">
                  {data.desc}
                </p>
                <p>Built with: </p>
                <div className="technologies">
                  {data?.tech?.map((t) => (
                    <p>{t}</p>
                  ))}
                  {/* <i className="devicon-java-plain"></i>
                  <i className="devicon-spring-plain"></i>
                  <i className="devicon-html5-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-sass-original"></i> */}
                </div>
                
                <div className="buttons">
                <a href={data.git} target="_blank" rel="noopener noreferrer">
                  <div className="button">
                    <GitHubIcon /> <p>See Repository</p>
                  </div>
                  </a>
                  <a href={data.demo} target="_blank" rel="noopener noreferrer">
                  <div className="button">                  
                    <OpenInNewIcon /> <p>See Live Demo</p>
                  </div>
                  </a>

                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog2">
          <Button onClick={handleClose} className="dialogButton" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
