import React from "react";
import "./twopage.scss";
import { Link } from "react-router-dom";

const twopage = () => {
  return (
    <div>
      <div className="twopage">
        <div className="twopage-container">
          <h1 className="twopage-container-first">
            <Link to="/">About</Link>
          </h1>
          <h1 className="twopage-container-second">
            <Link to="/skills">Skills</Link>
          </h1>
          <h1 className="twopage-container-three">
            {" "}
            <Link to="/projects">Projects</Link>
          </h1>
          <h1 className="twopage-container-four">
            {" "}
            <Link to="/contact">Contact</Link>
          </h1>
        </div>
        <div className="twopage-text">
          <h1>Jezyki Programowania oraz narzedzia ktore znam/uzywam ➰</h1>
          <h3>○ HTML5 </h3>
          <h3>○ CSS - (Framework: SASS/SCSS, TailwindCSS, Bootstrap)</h3>
          <h3>○ JavaScript - (Framework: ReactJS and NodeJS)</h3>
          <h3>○ Git / Github</h3>
          <h3>○ Visual Studio Code, PHP Storm</h3>
        </div>
      </div>
    </div>
  );
};

export default twopage;
