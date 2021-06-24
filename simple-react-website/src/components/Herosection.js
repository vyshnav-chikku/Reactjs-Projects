import React from "react";
import "./Heosection.css";
import "../App.css";
import Maldives from "./videos/Maldives.mp4";
import Button from "./Button";

function Herosection() {
  return (
    <div className="herocontainer">
      <video src={Maldives} autoPlay muted loop></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="herobtns">
        <Button className="btns" buttonStyle="btn--outline">
          GET STARTED
        </Button>
        <Button>
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
