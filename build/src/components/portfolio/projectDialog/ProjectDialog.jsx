import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./projectDialog.scss";

export default function AlertDialog({title, desc, tech, github, url, handleClickOpen, handleClose, open}) {


  return (
    <div>    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ p: 0 }}>
          <DialogContentText id="alert-dialog-description">
            <div className="container">
              <div className="top">
                <img
                  src="https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900"
                  alt=""
                />
              </div>
              <div className="bottom">
                <h2>CASE STUDY</h2>
                <h1>Travisor</h1>
                <p className="desc">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Aut animi eveniet nemo error a quaerat ipsum
                  necessitatibus dignissimos eligendi! Saepe rerum soluta fugit
                  libero eveniet expedita sit iure id assumenda?Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <p>Built with: </p>
                <div className="technologies">
                  <i className="devicon-java-plain"></i>
                  <i className="devicon-spring-plain"></i>
                  <i className="devicon-html5-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-sass-original"></i>
                </div>
                <div className="buttons">

                  <div className="button">
                    <GitHubIcon /> See Repository
                  </div>

                  <div className="button">
                    <OpenInNewIcon /> See Live Demo
                  </div>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
