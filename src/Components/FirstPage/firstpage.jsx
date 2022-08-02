import React from "react";
import "./firstpage.scss";
import { Link } from "react-router-dom";

const firstpage = () => {
  return (
    <div className="firstpage">
      <div className="firstpage-container">
        <h1 className="firstpage-container-first">
          {" "}
          <Link to="/">About</Link>
        </h1>
        <h1 className="firstpage-container-second">
          <Link to="/Skills">Skills</Link>
        </h1>
        <h1 className="firstpage-container-three">
          {" "}
          <Link to="/projects">Projects</Link>
        </h1>
        <h1 className="firstpage-container-four">
          {" "}
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
      <div className="firstpage-text">
        <h1>Hi!👋 I'am Kacper Pelc, im Junior Frontend Developer 🔧</h1>
        <h2>
          I'am programmer for 2 years💫 , mainly im write in JavaScript Language
          💻
        </h2>
        <h2>Mayby i'm write in Popular framework "ReactJS"👑</h2>
        <h2>and this moment im a lerned in TEB Technikum technology👨‍🎓</h2>
      </div>
    </div>
  );
};

export default firstpage;
