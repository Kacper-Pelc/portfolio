import React from "react";
import "./fourpage.scss";
import { Link } from "react-router-dom";

const fourpage = () => {
  return (
    <div className="fourpage">
      <div className="fourpage-container">
        <h1 className="fourpage-container-first">
          {" "}
          <Link to="/">About</Link>
        </h1>
        <h1 className="fourpage-container-second">
          <Link to="/Skills">Skills</Link>
        </h1>
        <h1 className="fourpage-container-three">
          {" "}
          <Link to="/projects">Projects</Link>
        </h1>
        <h1 className="fourpage-container-four">
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
      <div className="fourpage-text">
        <h1>Kontakt do mnie! 📲</h1>
        <h2>linkedin/Kacper-pelc 💻</h2>
        <h2>Github.com/Kacper-pelc</h2>
        <h2>Facebook.com/KacperPelc</h2>
        <h2>dc Klapek#0700</h2>
      </div>
    </div>
  );
};

export default fourpage;
